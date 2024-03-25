import { io } from "socket.io-client"

const socket = io("http://localhost:4000");

socket.on("connect", () => {
  console.log("Conectado al servidor Socket.IO");
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor Socket.IO");
});