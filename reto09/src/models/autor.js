import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Autor = sequelize.define('Autor', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nacionalidad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Autor;