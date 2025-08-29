import express from 'express';
import autorRoutes from './autorRoutes.js';
import libroRoutes from './libroRoutes.js';
import resenaRoutes from './resenaRoutes.js';

const router = express.Router();

router.use('/autores', autorRoutes);
router.use('/libros', libroRoutes);
router.use('/resenas', resenaRoutes);

export default router;