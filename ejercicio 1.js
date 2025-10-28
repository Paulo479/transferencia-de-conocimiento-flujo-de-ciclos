/**
 * EJERCICIO 1: NÚMEROS PRIMOS (BÁSICO)
 * Muestra todos los números primos entre 1 y 50.
 */
function numerosPrimosBasico() {
    console.log("Números primos entre 1 y 50:");

    // Ciclo que va del 2 al 50
    for (let i = 2; i <= 50; i++) {
        let esPrimo = true;

        // Ciclo para verificar divisibilidad (solo hasta i-1)
        for (let j = 2; j < i; j++) {
            // CONDICIONAL: Si es divisible por algún número distinto de 1 y sí mismo, no es primo.
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }

        // CONDICIONAL: Si la bandera no cambió, es primo.
        if (esPrimo) {
            console.log(i);
        }
    }
}

// numerosPrimosBasico();