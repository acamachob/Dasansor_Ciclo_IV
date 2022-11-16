const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactosSchema = new Schema({
  nombre: { type: String, required: true, max: 120 },
  apellido: { type: String, required: true, max: 120 },
  correo: { type: String, required: false, max: 70 },
  mensaje: { type: String, required: false, max: 150 },
});

module.exports = mongoose.model("contactos", ContactosSchema);
