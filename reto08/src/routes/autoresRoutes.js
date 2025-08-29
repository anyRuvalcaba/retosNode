const express = require("express");
const {
  obtenerAutores,
  obtenerAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
} = require("../controllers/autoresController.js");

const router = express.Router();

router.get("/", obtenerAutores);
router.get("/:id", obtenerAutorPorId);
router.post("/", crearAutor);
router.put("/:id", actualizarAutor);
router.delete("/:id", eliminarAutor);

module.exports = router;