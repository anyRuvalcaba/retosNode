const mongoose = require("mongoose");
const Resena = require("../models/resena.js");
const Libro = require("../models/libro.js");

// GET todas las resenas
const obtenerResenas = async (req, res) => {
  try {
    const resenas = await Resena.find().populate("libroId");
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET resena por ID
const obtenerResenaPorId = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const resena = await Resena.findById(id).populate("libroId");
    if (!resena) return res.status(404).json({ error: "Resena no encontrada" });
    res.json(resena);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST crear resena
const crearResena = async (req, res) => {
  try {
    const { comentario, puntuacion, libroId } = req.body;

    const libro = await Libro.findById(libroId);
    if (!libro) return res.status(400).json({ error: "Libro no existe" });

    const resena = new Resena({ comentario, puntuacion, libroId });
    const nuevaResena = await resena.save();
    res.status(201).json(nuevaResena);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT actualizar resena
const actualizarResena = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const resena = await Resena.findByIdAndUpdate(id, req.body, { new: true });
    if (!resena) return res.status(404).json({ error: "Resena no encontrada" });
    res.json(resena);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE eliminar resena
const eliminarResena = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const resena = await Resena.findByIdAndDelete(id);
    if (!resena) return res.status(404).json({ error: "Resena no encontrada" });
    res.json({ mensaje: "Resena eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerResenas,
  obtenerResenaPorId,
  crearResena,
  actualizarResena,
  eliminarResena,
};