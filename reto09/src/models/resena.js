import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Libro from './libro.js';

const Resena = sequelize.define('Resena', {
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// FK: una reseña pertenece a un libro
Resena.belongsTo(Libro, { foreignKey: 'libroId' });
Libro.hasMany(Resena, { foreignKey: 'libroId' });

export default Resena;