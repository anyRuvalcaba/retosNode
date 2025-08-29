const mongoose = require("mongoose");

const resenaSchema = new mongoose.Schema({
  comentario: { type: String, required: true },
  puntuacion: { type: Number, min: 1, max: 5, required: true },
  fecha: { type: Date, default: Date.now },
  libroId: { type: mongoose.Schema.Types.ObjectId, ref: "Libro", required: true },
});

module.exports = mongoose.model("Resena", resenaSchema);