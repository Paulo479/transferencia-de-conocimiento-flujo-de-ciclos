/**
 * EJERCICIO 4: PROMEDIO DE NOTAS
 * Calcula el promedio y aprobación de 5 estudiantes.
 */
function ejercicio4_promedio() {
    const NUM_ESTUDIANTES = 5;
    const NUM_NOTAS = 3;
    const NOTA_APROBACION = 3.0;

    // CICLO EXTERNO: Recorre los 5 estudiantes.
    for (let i = 1; i <= NUM_ESTUDIANTES; i++) {
        let sumaNotas = 0;
        console.log(`\n--- Estudiante ${i} ---`);

        // CICLO INTERNO: Pide las notas del estudiante.
        for (let j = 1; j <= NUM_NOTAS; j++) {
            const inputNota = prompt(`Ingrese la Nota ${j} (0.0 a 5.0):`);
            const nota = parseFloat(inputNota);
            
            // CONDICIONAL: Validación simple de nota.
            if (!isNaN(nota) && nota >= 0 && nota <= 5) {
                sumaNotas += nota;
            } else {
                console.log("Nota no válida.");
            }
        }

        const promedio = sumaNotas / NUM_NOTAS;
        console.log(`Promedio: ${promedio.toFixed(2)}`);

        // CONDICIONAL: Determina si aprueba o reprueba.
        if (promedio >= NOTA_APROBACION) {
            console.log("¡APROBADO! 🎉");
        } else {
            console.log("REPROBADO. 😞");
        }
    }
}
// ejercicio4_promedio();