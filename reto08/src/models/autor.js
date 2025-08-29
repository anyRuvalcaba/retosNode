const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nacionalidad: { type: String, required: true },
  fechaNacimiento: { type: Date },
});

module.exports = mongoose.model("Autor", autorSchema);