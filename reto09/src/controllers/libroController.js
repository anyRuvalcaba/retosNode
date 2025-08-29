import Libro from '../models/libro.js';
import Autor from '../models/autor.js';

export const crearLibro = async (req, res) => {
  try {
    const libro = await Libro.create(req.body);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll({ include: Autor });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};