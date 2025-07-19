export function contarPropiedades(req,res){
    const objeto = req.body;
    if(!objeto || typeof objeto !== 'object'||Array.isArray(objeto)){
        return res.status(400).json({error: 'El objeto no es valido'});
    }
    const claves = Object.keys(objeto);
    const cantidad = claves.length;
    const detallado = req.query.detallado === 'true';
    const respuesta = {propiedades: cantidad};
    if(detallado){
        respuesta.detalles = claves;
    }
    return res.json(respuesta);
}