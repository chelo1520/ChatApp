import Usuario from "../models/users.models.js"
import bcrypt from "bcrypt"
import generarToken from "../libs/generadorJWT.js"
import cookie from "cookie-parser"

export const homeController = (req, res) => {
  res.send("Home")
}

export const registerController = async(req, res) => {
  try {
    const {nombres, username, password, genero, confirmPassword} = req.body

    //Pedir todos los campos 
    if(!nombres || !username || !password || !genero || !confirmPassword){
      throw new Error(["Por favor llene todos los campos!"])
    }

    //Validar contraseña
    if(password != confirmPassword){
      throw new Error(["Contraseña de confirmacion incorrecta!"])
    }

    //Validar username
    const usernameValidate = await Usuario.findOne({username})
    if(usernameValidate){
      throw new Error(["Nombre de usuario en uso, elija otro !"])
    }

    //Hashear contraseña
    const passwordHash = await bcrypt.hash(password, 10)


    //Foto de perfil por genero
    let fotoURL = ""
    if(genero === "femenino"){
      fotoURL = "https://avatar.iran.liara.run/public/girl?username="
    }else{
      fotoURL = "https://avatar.iran.liara.run/public/boy?username="
    }

    const usuario = new Usuario({
      nombres,
      username,
      password: passwordHash,
      genero,
      fotoPerfil: `${fotoURL}${Math.random()}`
    })

    if(!usuario){
      throw new Error(["Error al crear usuario"])
    }
    
    await usuario.save()

    await generarToken(usuario._id, res)

    res.json({
      nombre: usuario.nombres,
      username: usuario.username,
      password: usuario.password,
      genero: usuario.genero,
      fotoPerfil: usuario.fotoPerfil
    })

  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
}

export const loginController = async(req, res) => {
  try {
    const {username, password} = req.body

    //Pedir todos los campos 
    if(!username || !password){
      res.status(500).send(["Por favor llene todos los campos!"])
    }

    const user = await Usuario.findOne({username})
    if(!user){
      res.status(500).send(["Usuario no registrado"])
    }

    const passwordValidate = await bcrypt.compare(password, user.password)
    if(!passwordValidate){
      res.status(500).send(["Contraseña incorrecta"])
    }

    await generarToken(user._id, res)

    res.json({user})
  } catch (error) {
    res.status(401).send(["Error interno del servidor " + error.message])
  }
}

export const logoutController = async(req, res) => {
  try {
    res.cookie("token", "", {maxAge: 0})
    res.send("Sesion cerrada")
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}