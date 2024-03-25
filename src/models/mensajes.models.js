import mongoose, { Schema, mongo } from "mongoose";

const mensajeSchema = new Schema(
  {
    remitenteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      require: true
    },
    receptorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      require: true
    },
    mensaje: {
      type: String,
      require: true
    }
  },
    {
      timestamps: true
    }
)

const Mensaje = mongoose.model("Mensaje", mensajeSchema)

export default Mensaje;