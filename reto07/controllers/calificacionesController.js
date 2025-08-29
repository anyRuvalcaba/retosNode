const estudiantes = require("../data/estudiantes.js");
const cursos = require("../data/cursos.js");
const calificaciones = require("../data/calificaciones.js");

const obtenerCalificaciones = (req, res) => {
  try {
    const resultado = calificaciones.map((calificacion) => {
      const estudiante = estudiantes.find(
        (e) => e.id === calificacion.estudianteId
      );
      const curso = cursos.find((c) => c.id === calificacion.cursoId);

      if (!estudiante || !curso) {
        throw new Error(
          `Datos no encontrados para calificación ID ${calificacion.id}`
        );
      }

      return {
        nombre: estudiante.nombre,
        curso: curso.nombre,
        calificacion: calificacion.calificacion,
      };
    });

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { obtenerCalificaciones };