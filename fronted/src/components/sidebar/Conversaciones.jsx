import { useConversaciones } from "../../context/ConversacionesContext"
import { Conversacion } from "./Conversacion"
import { emojisRandom } from "../../ultis/emojis.js"

export const Conversaciones = () => {

  const { users, usuariosFiltrados } = useConversaciones()

  return (
    <div id="conversaciones">
      { usuariosFiltrados ? 
        usuariosFiltrados.map((user, index) => (
          <Conversacion 
            key={user._id}
            user = {user}
            ultimo = {index === users.length - 1}
            emoji = {emojisRandom()}
          />
        ))
        : users && users.map((user, index) => (
            <Conversacion 
              key={user._id}
              user = {user}
              ultimo = {index === users.length - 1}
              emoji = {emojisRandom()}
            />
          ))
      }
   </div>
  )
}
