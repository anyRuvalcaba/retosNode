import Autor from '../models/autor.js';

export const crearAutor = async (req, res) => {
  try {
    const autor = await Autor.create(req.body);
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};