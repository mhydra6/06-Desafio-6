// Pedir tres números al usuario
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Verificar que los valores ingresados sean números válidos
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    let promedio = (num1 + num2 + num3) / 3;
    console.log(`El promedio de los números ingresados es: ${promedio.toFixed(2)}`);
} else {
    console.log("Por favor, ingresa valores numéricos válidos.");
}