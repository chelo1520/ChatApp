import Conversacion from "../models/conversacion.model.js"
import Mensaje from "../models/mensajes.models.js"

export const enviarMensajeController = async(req, res) => {
  try {
    const {mensaje} = req.body
    const receptorId = req.params.id
    const remitenteId = req.usuario._id

    let conversacion = await Conversacion.findOne({participantes: { $all: [receptorId, remitenteId]}})
    
    if(!conversacion){
      conversacion = new Conversacion({
        participantes: [
          receptorId,
          remitenteId
        ]
      })
    }

    const mensajeEnviado = new Mensaje({
      remitenteId,
      receptorId,
      mensaje
    })

    if(mensajeEnviado){
      conversacion.mensaje.push(mensajeEnviado._id)
    }


    await Promise.all([conversacion.save(), mensajeEnviado.save()]);

    res.send(mensajeEnviado)
  } catch (error) {
    res.status(500).send("Error al enviar mensaje" + error.message)
  }
  
}

export const conversacionController = async(req, res) => {
  try {

    const usuarioDeChat = req.params.id
    const remitenteId = req.usuario._id

    const conversacion = await Conversacion.findOne(
      {participantes: { $all: [usuarioDeChat, remitenteId]}}
      ).populate("mensaje")

    if(!conversacion){
      return res.status(200).json([]);
    }
      

    const mensajes = conversacion.mensaje

    res.send(mensajes)
  } catch (error) {
    res.status(500).send("Error al mostrar conversación" + error.message)
  }
}