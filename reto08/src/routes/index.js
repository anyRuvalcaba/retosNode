const express = require("express");
const librosRoutes = require("./librosRoutes.js");
const autoresRoutes = require("./autoresRoutes.js");
const resenasRoutes = require("./resenasRoutes.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("📚 Bienvenido a la API de Autores, Libros y Reseñas");
});

router.use("/libros", librosRoutes);
router.use("/autores", autoresRoutes);
router.use("/resenas", resenasRoutes);

module.exports = router;