import jwt from "jsonwebtoken";
import KEY from "../libs/keyToken.js";
import Usuario from "../models/users.models.js";

export const verifyToken = async(req, res, next) => {
  try {
    const token = req.cookies.token 
    if(!token){
      res.status(401).send("Accion no valida.")
    }

    const extraer = await jwt.verify(token, KEY)
    if(!extraer){
      res.status(401).send("Accion no valida.")
    }

    const user = await Usuario.findById(extraer.userid).select("-password")
    if(!user){
      res.status(401).send("Accion no valida.")
    }
    
    req.usuario = user

    next()

  } catch (error) {
    res.status(500).json({mensaje: error.message})
  }
}