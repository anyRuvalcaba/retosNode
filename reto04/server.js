import express from 'express';
import { encontrarMayor, ordenarAscendente } from './utils/encontrarMayor.js';

const app = express();
const port = 3000;

//http://localhost:3000/mayor?numeros=5,3,9,1
app.get('/mayor', (req, res) => {
    const numerosLista = req.query.numeros;
    if (!numerosLista) {
        return res.status(400).json({ error: 'El parametro numeros es obligatorio' });
    }
    const valores = numerosLista.split(',').map(n => n.trim());
    const numerosValidos = valores.every(n => n !== '' && !isNaN(n));
    if (!numerosValidos) {
        return res.status(400).json({ error: 'Los valores no son validos' });
    }
    const resultado = encontrarMayor(numerosLista);
    const numeros = valores.map(Number);
    const ascendente = ordenarAscendente(numerosLista);
    res.json({ numeros, resultado, ascendente });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});