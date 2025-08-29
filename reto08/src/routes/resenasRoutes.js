const express = require("express");
const {
  obtenerResenas,
  obtenerResenaPorId,
  crearResena,
  actualizarResena,
  eliminarResena,
} = require("../controllers/resenasController.js");

const router = express.Router();

router.get("/", obtenerResenas);
router.get("/:id", obtenerResenaPorId);
router.post("/", crearResena);
router.put("/:id", actualizarResena);
router.delete("/:id", eliminarResena);

module.exports = router;