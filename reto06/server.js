import express from 'express';
import { contarPropiedades } from './controllers/contarController.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/contar',contarPropiedades);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});