import express from "express";
import mongoDB from "./db.js";
import cors from "cors";
import morgan from "morgan";
import routeUser from "./src/routes/auth.routes.js";
import routeMensaje from "./src/routes/mensaje.routes.js";
import cookieParser from "cookie-parser";
import routeUsuarios from "./src/routes/usuarios.routes.js";
import http from "http"
import { Server } from "socket.io";

const app = express()
const server = http.createServer(app) 

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",  routeUser)
app.use("/api/mensaje", routeMensaje)
app.use("/api/usuarios", routeUsuarios)

const PORT = 4000;
mongoDB()
server.listen(PORT, () => {
  console.log("Server iniciado en port " + PORT);
});

const io = new Server(server, {
    cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"],
    credentials: true
  }
})


io.on("connection", (socket) => {
  console.log("Usuario conectado:");

  // Escucha eventos desde el cliente
  socket.on("chat message", (msg) => {
    console.log("Mensaje recibido:", msg);
    // Puedes emitir eventos a todos los clientes conectados
    io.emit("chat message", msg);
  });

  // También puedes manejar otros eventos según tu lógica
});