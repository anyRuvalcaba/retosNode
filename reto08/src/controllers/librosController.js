const mongoose = require("mongoose");
const Libro = require("../models/libro.js");
const Autor = require("../models/autor.js");

const obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.find().populate("autorId");
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerLibroPorId = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const libro = await Libro.findById(id)
      .populate("autorId")
      .populate("reseñas");
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const crearLibro = async (req, res) => {
  try {
    const { titulo, año, genero, autorId } = req.body;

    const autor = await Autor.findById(autorId);
    if (!autor) return res.status(400).json({ error: "Autor no existe" });

    const libro = new Libro({ titulo, año, genero, autorId });
    const nuevoLibro = await libro.save();

    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarLibro = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const libro = await Libro.findByIdAndUpdate(id, req.body, { new: true });
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarLibro = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  try {
    const libro = await Libro.findByIdAndDelete(id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json({ mensaje: "Libro eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerLibros,
  obtenerLibroPorId,
  crearLibro,
  actualizarLibro,
  eliminarLibro,
};