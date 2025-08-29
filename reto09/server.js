import express from 'express';
import sequelize from './config/database.js';
import routes from './routes/index.js';

const app = express();
app.use(express.json());

// Rutas principales
app.use('/api', routes);

// Conectar con DB
sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
  app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error al conectar con la base de datos:', err);
});