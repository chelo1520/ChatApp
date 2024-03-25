import {Link, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import { useAuth } from "../context/UserContext"
import { useEffect } from "react"

export const Login = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {loginUser, errores, cuentaAutenticada} = useAuth()
  const navigate = useNavigate()

  const login = (values) =>{
    loginUser(values)
  }

  
  useEffect(() => {
    if(cuentaAutenticada) navigate("/")
  }, [cuentaAutenticada])



  return (
    <div className="container-sm" id="abuelo-content">
      <div className="container m-0" id="father-content">
        <div className="row">
          <div className="col-12 mb-1">
            <h4 className="text-center">Login <span className="text-primary">ChatApp</span></h4>
          </div>
          <form className="col-12" onSubmit={handleSubmit(login)}>
              <label htmlFor="username">Username</label>
              <input 
              type="text"
              placeholder="Ingrese nombre de usuario" 
              className="form-control mb-2 mt-1" 
              id="username"
              {...register("username", {required: "Escriba su nombre de usuario"})}
              />{errors.username && <p className="text-danger">{errors.username.message}</p>}
              
              <label htmlFor="password">Contraseña</label>
              <input 
              type="password" 
              placeholder="Ingrese Contraseña" 
              id="password" 
              className="form-control mt-1 mb-3"
              {...register("password", {required: "Escriba su contraseña"})}
              />{errors.password && <p className="text-danger">{errors.password.message}</p>}

              {errores && <p className="bg-danger text-white rounded">{errores}</p>}
              <Link to="/register" className="text-decoration-none">No tenes cuenta ?</Link>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark mt-1">Iniciar Sesión</button>                
              </div>
          </form>
        </div>
      </div>

    </div>
  )
}
