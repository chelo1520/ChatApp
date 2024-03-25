import { useConversaciones } from "../../context/ConversacionesContext"
import { useAuth } from "../../context/UserContext"

export const Mensaje = ({mensaje}) => {

  const {usuarioChat} = useConversaciones()
  const {user} = useAuth()

  const remitente = mensaje.remitenteId === user._id

  return (
    <div className="d-flex mensajes">

    {
      remitente ? (
      <div className="d-flex mb-1 align-items-end mensaje-enviado">
        <div className="mensaje-env texto-remitente bg-primary">{mensaje.mensaje}</div>   
        <img width="40px" src={user.fotoPerfil} alt={`img-${user.username}`}/>
      </div>
      ):(
      <div className="d-flex mb-1 align-items-end mensaje-recibido">
        <img width="40px" src={usuarioChat.fotoPerfil} alt={`img-${usuarioChat.username}`}/>
        <div className="mensaje-env texto-receptor bg-dark">{mensaje.mensaje}</div>    
      </div>
      )
    }

    </div>
  )
}
