import { Router } from "express";
import { registerController, loginController, logoutController } from "../controllers/auth.controller.js";

const routeUser = Router()


routeUser.post("/register", registerController)

routeUser.post("/login", loginController)

routeUser.post("/logout", logoutController)


export default routeUser