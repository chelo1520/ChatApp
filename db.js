import mongoose from "mongoose";

const mongoDB = async() => {
try {
  await mongoose.connect("mongodb://localhost:27017/ChatApp")
  console.log("DB conectada"); 
} catch (error) {
  console.log("Error al conectar mongo " + error);
}
}

export default mongoDB