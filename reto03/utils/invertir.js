export default function invertirCadena(texto){  // module
    const soloLetrasYNumeros = /^[a-zA-Z0-9]+$/;
    if (!soloLetrasYNumeros.test(texto)) {
        return 'Error: El texto solo debe contener letras y números';
    }
    const textoMinusculas = texto.toLowerCase();
    const textoInvertido = textoMinusculas.split('').reverse().join('');
    return textoInvertido;
}
export function name(params) {
    
}

export function name2(params) {
    
}

//module.exports = invertirCadena // commonjs