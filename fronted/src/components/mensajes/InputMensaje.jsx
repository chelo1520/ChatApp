import { enviarMensaje } from "../../api/fetchConvers"
import { useConversaciones } from "../../context/ConversacionesContext"
import {useState } from "react"
import { useAuth } from "../../context/UserContext"

export const InputMensaje = () => {

  const {usuarioChat, setMensajes} = useConversaciones()
  const {user} = useAuth()
  const [input, setInput] = useState("")
  

  const textValue = (e) => {
    setInput(e.target.value)
  }
  const form = (e) => {
    e.preventDefault()
  }

  const enviar = () => {
    try {
      enviarMensaje(input, usuarioChat._id)
      setMensajes((prevMensajes) => [...prevMensajes, {mensaje: input, remitenteId: user._id}])
      setInput("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="input-group " id="inputMensaje" onSubmit={form}>
      <input type="text" className="form-control" placeholder="Envia mensajes" aria-describedby="basic-addon1" value={input} onChange={textValue}/>
      <button onClick={enviar} className="input-group-text" id="basic-addon1"><i className="bi bi-send"></i></button>
    </form>
  )
}
