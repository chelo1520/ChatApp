import { useConversaciones } from "../../context/ConversacionesContext"
import { useForm } from "react-hook-form"
import { useState } from "react"

export const InputSearch = () => {

  const {users, setUsuariosFiltrados} = useConversaciones()
  const {register, handleSubmit} = useForm()
  

  const handleSearch = (values) => {
    if(!values) return;
    const filtrados = users.filter((user) => {
      const res = user.username.toLowerCase().includes(values.search.toLowerCase())
      return res
    })
    setUsuariosFiltrados(filtrados)
  }

  return(
    <>
      <form onSubmit={handleSubmit(handleSearch)} className="row container w-100 p-0 justify-content-center">
        <input id="input-search" type="text" className="form-control col bg-dark border border-secondary" placeholder="Buscar..."
          {...register("search")}
        />
        <button type="submit" className="btn btn-primary col-2 border border-secondary botonSearch">
          <i className="bi bi-search"></i>
        </button>
        <div className="mb-2"></div>
        <div id="linea-glass"></div>
      </form>
    </>
  )
}
