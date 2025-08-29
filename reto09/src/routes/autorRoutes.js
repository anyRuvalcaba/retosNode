import express from 'express';
import { crearAutor, obtenerAutores } from '../controllers/autorController.js';

const router = express.Router();

router.post('/', crearAutor);
router.get('/', obtenerAutores);

export default router;