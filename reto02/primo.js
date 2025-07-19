export function esPrimo(numero){
    if (numero < 1){
        throw Error('Ingrese un numero entero positivo');
    }

    let raiz = Math.floor(Math.sqrt(numero)) + 1;

    for(let i=2; i<raiz; i++){
        if (numero % i ==0){
            return false;
        }
    }
    return true;
}