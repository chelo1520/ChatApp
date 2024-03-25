import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const routeUsuarios = Router()

routeUsuarios.get("/", verifyToken ,usuariosController)

export default routeUsuarios