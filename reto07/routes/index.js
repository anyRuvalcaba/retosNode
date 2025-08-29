const express = require("express");
const calificacionesRoutes = require("./calificacionesRoutes.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a la API de Estudiantes, Cursos y Calificaciones 📚");
});

router.use("/calificaciones", calificacionesRoutes);

module.exports = router;