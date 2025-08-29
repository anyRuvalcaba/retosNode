const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true, unique: true },
  año: { type: Number, required: true },
  genero: { type: String, required: true },
  autorId: { type: mongoose.Schema.Types.ObjectId, ref: "Autor", required: true },
});

// Virtual para reseñas (relación inversa)
libroSchema.virtual("reseñas", {
  ref: "Reseña",
  localField: "_id",
  foreignField: "libroId",
});

libroSchema.set("toObject", { virtuals: true });
libroSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Libro", libroSchema);