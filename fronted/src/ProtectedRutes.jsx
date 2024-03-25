import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "./context/UserContext"



export const ProtectRoutes = () => {


  const {cuentaAutenticada} = useAuth()


  if(!cuentaAutenticada) return <Navigate to="/login" replace/>


  return <Outlet/>

}
