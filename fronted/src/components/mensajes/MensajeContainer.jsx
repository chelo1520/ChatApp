import { useConversaciones } from "../../context/ConversacionesContext"
import { useAuth } from "../../context/UserContext"
import { Mensajes } from "./Mensajes"
import { useEffect, useState } from "react"

export const MensajeContainer = () => {
  const [isSelected, setIsSelected] = useState(false)
  const {usuarioChat} = useConversaciones()
  const {user} = useAuth()

  useEffect(() => {
    if(usuarioChat === null){
      setIsSelected(false)
    }else{
      setIsSelected(true)
    }
  }, [usuarioChat])
  

  return (
    <div className="col-8 content-mensaje">
      {
        isSelected ? <Mensajes/> : 
        <div className="h-100 d-flex justify-content-center align-items-center text-center" id="content-home">
          <h5><span>Bienvenido {user.nombreCompleto}.</span><br />
            Selecciona un chat para poder mensajear <br /> 
            <i className="bi bi-chat-left-text-fill text-primary"></i></h5>
        </div>
      }
    </div>
  )
}
