import express from 'express';
import { separarParesImpares } from './utils/separarParesImpares.js';

const app = express();
const port = 3000;

app.get('/filtrar',(req,res)=>{
    const numerosLista = req.query.numeros;
    if(!numerosLista){
        return res.status(400).json({error: 'El parametro numeros es requerido',
            ejemplo: '?numeros=1,2,3,4,5'
        });
    }
    const valores = numerosLista.split(',').map(n=>n.trim());
    const sonValidos = valores.every(n=>n!==''&&!isNaN(n));
    if(!sonValidos){
        return res.status(400).json({error: 'Los valores no son validos'});
    } 
    const numeros= valores.map(Number);
    const {pares, impares}=separarParesImpares(numeros);
    res.json({numeros,pares,impares});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});