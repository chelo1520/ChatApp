import { Sidebar } from "../components/sidebar/Sidebar"
import { MensajeContainer } from "../components/mensajes/MensajeContainer"

export const Home = () => {
  return (
    <div className="container-sm" id="abuelo-content">
      <div className="container m-0" id="father-content">
        <Sidebar/>
        <MensajeContainer/>
      </div>
    </div>
  )
}
