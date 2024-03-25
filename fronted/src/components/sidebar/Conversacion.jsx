import { useConversaciones } from "../../context/ConversacionesContext"

export const Conversacion = ({user, ultimo, emoji}) => {

  const {selected, setSelected, setUsuarioChat} = useConversaciones()
  
  const handleSelect = (user) => {
    setSelected(user)
    setUsuarioChat(user)
  }
  const select = selected?._id === user._id
  
  return (
    <>
      <div onClick={() => handleSelect(user)} className={`d-flex row w-100 rounded-1 p-1 justify-content-center users-content ${select ? "bg-primary" : ``}`}>
        <div className="col-10 d-flex align-items-center row p-0">
          <div className="col-3 p-0 d-flex justify-content-center position-relative">
            <img width="40px" src={user.fotoPerfil} alt={`img-${user.username}`} />
            <div className="punto-verde"></div>
          </div>
          <p className="m-0 col-9 p-1">{user.username}</p>
        </div>

        <div className="col-2 d-flex justify-content-end align-items-center p-0">
          <span>{emoji}</span>
        </div>
      </div>
      {!ultimo ? <div id="linea-glass"></div> : ``}
    </>
  )
}
