/**
 * EJERCICIO 3: CAJERO AUTOMÁTICO
 * Permite retiros múltiples con verificación de fondos.
 */
function ejercicio3_cajero() {
    // Variable CONSTANTE para el saldo inicial.
    const SALDO_INICIAL = 500000; 
    let saldoActual = SALDO_INICIAL;
    let continuar = 'r';

    console.log(`Saldo inicial: $${saldoActual.toLocaleString()}`);

    // CICLO: Permite realizar múltiples retiros.
    while (continuar === 'r') {
        console.log(`\nSaldo disponible: $${saldoActual.toLocaleString()}`);
        const inputMonto = prompt("Ingrese el monto a retirar (o 's' para salir):");

        if (inputMonto.toLowerCase() === 's') {
            continuar = 's';
            break;
        }

        const montoRetirar = parseInt(inputMonto);

        // CONDICIONAL: Verifica que el monto sea válido y haya fondos.
        if (isNaN(montoRetirar) || montoRetirar <= 0) {
            console.log("Monto no válido.");
        } else if (montoRetirar <= saldoActual) {
            // TRANSACCIÓN EXITOSA:
            saldoActual -= montoRetirar;
            console.log(`Retiro exitoso. Nuevo saldo: $${saldoActual.toLocaleString()}`);
        } else {
            // CONDICIONAL DE ERROR: Muestra el mensaje si no hay fondos.
            console.log("⛔ ERROR: Saldo insuficiente. Transacción denegada.");
        }
    }

    console.log(`\nGracias por usar el cajero. Saldo final: $${saldoActual.toLocaleString()}`);
}
// ejercicio3_cajero();