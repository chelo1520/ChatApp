import { createContext, useContext, useState } from "react"
import { registerUser, Loguear } from "../api/fetchUser.js"
import Cookies from "js-cookie"

const Usuario = createContext()

export function useAuth() {
  const usuario = useContext(Usuario)
  if(!usuario){
    throw new Error("Error al crear contexto")
  }
  return usuario
} 

export const UserProvider = ({children}) => {

  const [errores, setErrores] = useState(null)
  const [cuentaAutenticada, setCuentaAutenticada] = useState(false)
  const [user, setUser] = useState(null)

  const registrarUser = async(values) => {
    try {
      await registerUser(values)
      setCuentaAutenticada(true)

    } catch (error) {
      setErrores(error.response.data)
    }
  }

  const loginUser = async(values) => {
    try {
      const data = await Loguear(values)
      setCuentaAutenticada(true)
      setUser(data.data.user)
    } catch (error) {
      setErrores(error.response.data)
    }
  }

  const logout = () => {
    Cookies.remove("token")
    setCuentaAutenticada(false)
  }

  return (
    <Usuario.Provider value={{
      registrarUser,
      loginUser,
      errores,
      cuentaAutenticada,
      logout,
      user
      }}>

      {children}
    </Usuario.Provider>
  )
}
