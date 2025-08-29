const express = require("express");
const { obtenerCalificaciones } = require("../controllers/calificacionesController.js");

const router = express.Router();

router.get("/", obtenerCalificaciones);

module.exports = router;