import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { getConversaciones, getMensajes } from "../api/fetchConvers"
import { useAuth } from "./UserContext"

const Conversaciones = createContext()

export function useConversaciones(){
  try {
    const usuarios = useContext(Conversaciones)
    return usuarios
  } catch (error) {
    console.log(error);
  }
}

export const ConversacionesContext = ({children}) => {

  const [selected, setSelected] = useState(false)
  const [users, setUsers] = useState([])
  const [mensajes, setMensajes] = useState([])
  const [usuarioChat, setUsuarioChat] = useState(null)
  const [conversacionExiste, setConversacionExiste] = useState(false)
  const {cuentaAutenticada} = useAuth()
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(null)
   
  useEffect(() => {
      const obtenerMensajes = async() => {
        try {
          const res = await getMensajes(usuarioChat._id)
          setMensajes(res.data)
          setConversacionExiste(true)
        } catch (error) {
          console.log(error.message);
          setConversacionExiste(false)
        }
      }
      if(usuarioChat) obtenerMensajes()
  }, [usuarioChat])
  

  useEffect(() => {
    if(cuentaAutenticada){
      async function usuarios(){
        try {
          const conversaciones = await getConversaciones()
          setUsers(conversaciones.data)
        } catch (error) {
          console.log(error);
        }
      }
      usuarios()
    }
  }, [cuentaAutenticada])
  
  return (
    <Conversaciones.Provider value={{
      users,
      selected,
      setSelected,
      setUsuarioChat,
      usuarioChat,
      mensajes,
      setMensajes,
      conversacionExiste,
      setUsuariosFiltrados,
      usuariosFiltrados
      }}>
      {children}
    </Conversaciones.Provider>
  )
}
