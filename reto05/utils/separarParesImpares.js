export function separarParesImpares(numeros){
    const pares = numeros.filter(n=>n%2===0);
    const impares = numeros.filter(n=>n%2!==0);
    return {pares, impares};
}