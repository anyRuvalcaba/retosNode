import express from 'express';
import { crearResena, obtenerResenas } from '../controllers/resenaController.js';

const router = express.Router();

router.post('/', crearResena);
router.get('/', obtenerResenas);

export default router;