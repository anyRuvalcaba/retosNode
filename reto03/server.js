import http from 'http'; 
// const http = require('http'); commonjs
import { parse } from 'url';
import invertirCadena, {name, name2} from './utils/invertir.js'; // module

const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    if (parsedUrl.pathname === '/invertir' && req.method === 'GET') {
        const texto = parsedUrl.query.texto;

        if (!texto) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Falta el parámetro "texto"' }));
            return;
        }

        const invertido = invertirCadena(texto);

        if (invertido === null) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'El texto solo puede contener letras y números' }));
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ original: texto, invertido }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
});

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});