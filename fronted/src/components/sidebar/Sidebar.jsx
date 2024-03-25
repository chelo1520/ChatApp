import { InputSearch } from "./InputSearch"
import { Conversaciones } from "./Conversaciones"
import { LogoutIcon } from "./LogoutIcon"

export const Sidebar = () => {
  return (
    <>
    <div className="col-4" id="content-sidebar">
        <InputSearch/>
        <Conversaciones/>
        <LogoutIcon/>
    <div className="linea-mitad"></div>
    </div>
    </>
  )
}
