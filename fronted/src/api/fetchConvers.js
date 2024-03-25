import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true
});

//Obtener todos los usuarios
export const getConversaciones = async() => {
  try {
    const data = await axiosInstance.get("http://localhost:4000/api/usuarios")
    return data
  } catch (error) {
    return error
  }
}

//Enviar Mensajes
export const enviarMensaje = async(input, receptorId) => {
  try {
    await axiosInstance.post(`http://localhost:4000/api/mensaje/enviar/${receptorId}`, {mensaje: input})
  } catch (error) {
    console.log(error);
  }
}

//Obtener mensajes 
export const getMensajes =(chatId) => {
  return axiosInstance.get(`http://localhost:4000/api/mensaje/${chatId}`)
} 