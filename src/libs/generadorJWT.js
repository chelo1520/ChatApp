import Jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import KEY from "./keyToken.js";

const generarToken = (userid, res) => {

  try {
    const token = Jwt.sign({userid}, KEY, {
      expiresIn: "2d"
    })

    res.cookie("token", token, {
      maxAge: 2 * 24 * 60 * 60 * 1000,
		  httpOnly: true, 
		  sameSite: "strict", 
    })


  } catch (error) {
    res.status(500).send("Error interno del servidor al crear token" + error.message)
  }
}

export default generarToken