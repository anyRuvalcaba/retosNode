const mongoose = require("mongoose");
const Autor = require("../models/autor.js");

// GET todos los autores
const obtenerAutores = async (req, res) => {
  try {
    const autores = await Autor.find();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET autor por ID
const obtenerAutorPorId = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const autor = await Autor.findById(id);
    if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST crear autor
const crearAutor = async (req, res) => {
  try {
    const autor = new Autor(req.body);
    const nuevoAutor = await autor.save();
    res.status(201).json(nuevoAutor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT actualizar autor
const actualizarAutor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const autor = await Autor.findByIdAndUpdate(id, req.body, { new: true });
    if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE eliminar autor
const eliminarAutor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const autor = await Autor.findByIdAndDelete(id);
    if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
    res.json({ mensaje: "Autor eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerAutores,
  obtenerAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
};