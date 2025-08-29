import Resena from '../models/resena.js';
import Libro from '../models/libro.js';

export const crearResena = async (req, res) => {
  try {
    const resena = await Resena.create(req.body);
    res.json(resena);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerResenas = async (req, res) => {
  try {
    const resenas = await Resena.findAll({ include: Libro });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};