/**
 * EJERCICIO 2: TABLA DE MULTIPLICAR PERSONALIZADA
 * Muestra la tabla hasta el 12 y permite al usuario repetir.
 */
function ejercicio2_tabla() {
    let repetir = 's';

    // CICLO EXTERNO: Permite al usuario consultar otra tabla.
    while (repetir === 's' || repetir === 'S') {
        // En un entorno simple, usamos prompt() para obtener el número.
        const inputNumero = prompt("Ingrese el número para ver su tabla:");
        const numero = parseInt(inputNumero);

        if (isNaN(numero)) {
            console.log("Entrada no válida.");
        } else {
            console.log(`\nTabla del ${numero}:`);

            // CICLO INTERNO: Genera la tabla del 1 al 12.
            for (let i = 1; i <= 12; i++) {
                console.log(`${numero} x ${i} = ${numero * i}`);
            }
        }
        
        // CONDICIONAL: Pregunta si desea repetir.
        repetir = prompt("¿Desea consultar otra tabla? (s/n)").toLowerCase();
    }
    console.log("Fin del programa de tablas.");
}
// ejercicio2_tabla();