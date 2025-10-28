/**
 * EJERCICIO 7: CONTADOR DE PARES E IMPARES
 * Lee 10 números y clasifica por paridad.
 */
function ejercicio7_paresImpares() {
    const LIMITE_NUMEROS = 10;
    let contadorPares = 0;
    let contadorImpares = 0;

    console.log(`A continuación, ingresa ${LIMITE_NUMEROS} números.`);

    // CICLO: Se repite 10 veces para leer los números.
    for (let i = 1; i <= LIMITE_NUMEROS; i++) {
        const inputNumero = prompt(`Ingresa el número ${i} de ${LIMITE_NUMEROS}:`);
        const numero = parseInt(inputNumero);

        if (isNaN(numero)) {
            console.log("Entrada no válida. Se omite.");
            continue;
        }

        // CONDICIONAL: Usa el operador módulo (%) para verificar paridad.
        if (numero % 2 === 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
    }

    console.log(`\n--- Resultado Final ---`);
    console.log(`Total de números pares: ${contadorPares}`);
    console.log(`Total de números impares: ${contadorImpares}`);
}
// ejercicio7_paresImpares();