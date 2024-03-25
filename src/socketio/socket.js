import { Server } from "socket.io";
import http from "http"
import express from "express";

const app = express()

const server = http.createServer(app)

export {app, server}

const io = new Server(server, () => {
  cors: {
		origin: "http://localhost:4000"
	}
})

io.on("connection", (socket) => {
  console.log(`Coneccion exitosa`, socket._id);
})
