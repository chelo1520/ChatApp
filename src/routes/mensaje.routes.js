import { Router } from "express";
import { conversacionController, enviarMensajeController } from "../controllers/mensajes.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const routeMensaje = Router()

routeMensaje.post("/enviar/:id", verifyToken,enviarMensajeController)
routeMensaje.get("/:id", verifyToken ,conversacionController)

export default routeMensaje