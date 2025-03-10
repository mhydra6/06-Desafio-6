// Solicitar base y altura al usuario
let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

// Verificar que los valores sean números válidos
if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
    let area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
} else {
    console.log("Por favor, ingresa valores numéricos válidos y mayores a 0.");
}