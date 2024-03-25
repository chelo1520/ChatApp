import mongoose , {Schema} from "mongoose";

const conversacionSchema = new Schema(
  {
    participantes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true
      }
    ],
    mensaje: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mensaje",
      default: []
    }
    ]
  }
)

const Conversacion = mongoose.model("Conversacion", conversacionSchema) 

export default Conversacion