import { Mensaje } from "./Mensaje"
import { InputMensaje } from "./InputMensaje"
import { useConversaciones } from "../../context/ConversacionesContext"


export const Mensajes = () => {

  const {usuarioChat, mensajes, conversacionExiste} = useConversaciones()

  return (
    <>
    <div className="conatiner bg-secondary w-100 header-user">
      <p>Es: <span>Addam Sattler</span></p>
    </div>
    <div className="container mensajecontent">
      {
       mensajes.length === 0 ? <p className="text-white w-100 fs-4 text-center">No hay mensajes.</p> 
        :mensajes &&
          mensajes.map((mensaje, i) => (
              <Mensaje 
                key={i}
                mensaje={mensaje}
              />
            ))
          
      }
    </div>      
    <InputMensaje/>
    </>
  )
}
