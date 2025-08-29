import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('biblioteca_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

export default sequelize;