import Usuario from "../models/users.models.js"

export const usuariosController = async(req, res) => {

  try {

    const usuarioLogueado = req.usuario._id;
    console.log(usuarioLogueado);

    const usuarios = await Usuario.find({_id: { $ne: usuarioLogueado}}).select("-password")
    
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(404).send("Error interno del servidor " + error.message)
  }


 
}