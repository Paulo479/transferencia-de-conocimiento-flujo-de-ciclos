/**
 * EJERCICIO 5: TIENDA DE PRODUCTOS
 * Calcula el total de la compra y aplica descuento condicional.
 */
function ejercicio5_tienda() {
    let totalCompra = 0;
    let seguirComprando = 's';
    const LIMITE_DESCUENTO = 100000;
    const DESCUENTO_PORCENTAJE = 0.10;

    // CICLO: Repite mientras el usuario quiera agregar productos.
    while (seguirComprando === 's' || seguirComprando === 'S') {
        const inputPrecio = prompt("Ingrese el precio del artículo:");
        const precio = parseFloat(inputPrecio);
        const inputCantidad = prompt("Ingrese la cantidad:");
        const cantidad = parseInt(inputCantidad);

        // CONDICIONAL: Verifica entradas válidas.
        if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
            console.log("Valores inválidos. Artículo omitido.");
        } else {
            totalCompra += (precio * cantidad);
            console.log(`Subtotal actual: $${totalCompra.toLocaleString()}`);
        }
        
        seguirComprando = prompt("¿Desea agregar otro artículo? (s/n)").toLowerCase();
    }

    console.log(`\nTotal Bruto: $${totalCompra.toLocaleString()}`);

    let descuento = 0;
    let totalPagar = totalCompra;

    // CONDICIONAL: Aplica descuento si el valor supera el límite.
    if (totalCompra > LIMITE_DESCUENTO) {
        descuento = totalCompra * DESCUENTO_PORCENTAJE;
        totalPagar = totalCompra - descuento;
        console.log(`¡Descuento aplicado (10%)!: -$${descuento.toLocaleString()}`);
    } else {
        console.log("El total no supera los $100.000, no aplica descuento.");
    }

    console.log(`Total a Pagar: $${totalPagar.toLocaleString()}`);
}
// ejercicio5_tienda();