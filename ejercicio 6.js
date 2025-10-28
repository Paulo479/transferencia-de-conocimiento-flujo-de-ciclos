/**
 * EJERCICIO 6: JUEGO DEL ADIVINADOR
 * Genera un número y da pistas condicionales.
 */
function ejercicio6_adivinador() {
    // Genera un número aleatorio entre 1 y 20.
    const numeroSecreto = Math.floor(Math.random() * 20) + 1;
    let intentoUsuario = 0;
    let intentos = 0;

    console.log("¡Adivina el número secreto entre 1 y 20!");

    // CICLO: Repite hasta que el usuario adivine.
    while (intentoUsuario !== numeroSecreto) {
        const inputIntento = prompt("Ingresa tu adivinanza:");
        intentoUsuario = parseInt(inputIntento);
        intentos++;

        if (isNaN(intentoUsuario)) {
             console.log("Por favor, ingresa un número.");
             continue;
        }

        // CONDICIONAL: Verifica si acertó o da pistas.
        if (intentoUsuario === numeroSecreto) {
            // El ciclo se romperá después de este mensaje
            console.log(`\n¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
        } else if (intentoUsuario < numeroSecreto) {
            console.log("El número buscado es MAYOR.");
        } else {
            console.log("El número buscado es MENOR.");
        }
    }
}
