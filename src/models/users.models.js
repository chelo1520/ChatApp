import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    nombreCompleto: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      unique: true,
      require: true   
    },
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    genero: {
      type: String,
      enum: ["masculino", "femenino"],
      require: true
    },
    fotoPerfil:{
      type: String,
      default: ""
    },
  },{timestamps: true}
)

const Usuario = mongoose.model("Usuario", userSchema)

export default Usuario;
