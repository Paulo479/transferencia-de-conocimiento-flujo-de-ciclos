/**
 * EJERCICIO 8: CONTROL DE ACCESO
 * Permite 3 intentos para ingresar credenciales.
 */
function ejercicio8_acceso() {
    const USUARIO_CORRECTO = "admin";
    const CLAVE_CORRECTA = "1234";
    const MAX_INTENTOS = 3;

    let intentos = 0;
    let accesoConcedido = false;

    // CICLO: Continúa mientras haya intentos disponibles y no se haya accedido.
    while (intentos < MAX_INTENTOS && !accesoConcedido) {
        console.log(`\nIntento ${intentos + 1} de ${MAX_INTENTOS}`);

        const usuario = prompt("Ingrese usuario:");
        const clave = prompt("Ingrese contraseña:");

        // CONDICIONAL: Verifica las credenciales.
        if (usuario === USUARIO_CORRECTO && clave === CLAVE_CORRECTA) {
            accesoConcedido = true;
        } else {
            intentos++;
            console.log("Usuario o contraseña incorrectos.");
        }
    }

    // CONDICIONAL FINAL: Muestra el mensaje de bienvenida o denegación.
    if (accesoConcedido) {
        console.log("\n Bienvenido.");
    } else {
        console.log("\n Acceso denegado. Se agotaron los intentos.");
    }
}
// ejercicio8_acceso();