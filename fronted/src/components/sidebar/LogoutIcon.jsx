import { useAuth } from "../../context/UserContext"

export const LogoutIcon = () => {

  const { logout } = useAuth()

  return (   
      <div id="logout" className="container">
        <i className="bi bi-box-arrow-left" onClick={logout} ></i>
      </div>
  )
}
