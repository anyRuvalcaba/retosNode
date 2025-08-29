import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Autor from './autor.js';

const Libro = sequelize.define('Libro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// FK: un libro pertenece a un autor
Libro.belongsTo(Autor, { foreignKey: 'autorId' });
Autor.hasMany(Libro, { foreignKey: 'autorId' });

export default Libro;