import {useForm} from "react-hook-form"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../context/UserContext"

export const Register = () => {

  const { register, handleSubmit, formState: {errors} } = useForm()
  const {registrarUser, errores} = useAuth()
  const navigate = useNavigate()

  const handleRegister = (values) => {
    registrarUser(values)
    navigate("/login")
  }

  return (
    <div className="container-sm" id="abuelo-content">
      <div id="father-content">
        <div className="row">
          <div className="col-12 mb-1 mt-2">
            <h4 className="text-center">Registrar en <span className="text-primary">ChatApp</span></h4>
          </div>

          <form className="col-12 p-4" onSubmit={handleSubmit(handleRegister)}>
              <label htmlFor="nombres">Nombre completo</label>
              <input type="text" placeholder="Ingrese nombre completo" className={`form-control mt-1 ${errors.email ? 'is-invalid' : ''}`} id="nombres" {
                ...register("nombres", {required: "Escriba su nombre completo"})}/>
              {errors.nombres && <p className="text-danger">{errors.nombres.message}</p>}
              
              <label htmlFor="username">Nombre de usuario</label>
              <input type="text" placeholder="Ingrese nombre de usuario" id="username" className="form-control mt-1" {
                ...register("username", {required: "Escriba un nombre de usuario"})}/>
              {errors.username && <p className="text-danger">{errors.username.message}</p>}


              <label htmlFor="password">Contraseña</label>
              <input type="password" placeholder="Ingrese Contraseña" className="form-control mt-1" id="password" {
                ...register("password", {required: "Escriba una contraseña"})
              }/>
              {errors.password && <p className="text-danger">{errors.password.message}</p>}

              
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input type="password" placeholder="Ingrese Contraseña" id="confirmPassword" className="form-control mt-1" {
                ...register("confirmPassword", {required: "Vuelva a escribir su contraseña"})
              }/>
              {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}


              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="masculino" value="masculino" {
                    ...register("genero", {required: "Elija un genero"})
                  }/>
                  <label className="form-check-label" forhtml="masculino" >Masculino</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="femenino" value="femenino" {
                    ...register("genero", {required: "Elija un genero"})
                  }/>
                  <label className="form-check-label" forhtml="femenino" >Femenino</label>
                </div>
                {errors.genero && <p className="text-danger">{errors.genero.message}</p>}
              </div>

              {errores && <p className="text-white rounded text-center bg-danger">{errores}</p>}
              <Link to="/login" className="text-decoration-none d-block">Ya tenes cuenta ?</Link>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark mt-2">Registrarse</button>                
              </div>
          </form>
        </div>
      </div>

    </div>
  )
}
