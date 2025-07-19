export function encontrarMayor(lista) {
    const numeros = lista.split(',').map(Number);
    return Math.max(...numeros);
}

export function ordenarAscendente(lista) {
    const numeros = lista.split(',').map(Number);
    return numeros.sort((a, b) => a - b);
}