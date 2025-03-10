// Pedir los dos números al usuario
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Pedir la operación
let operacion = prompt("Ingresa la operación (+, -, *, /):");

// Verificar que los valores ingresados sean válidos
if (!isNaN(num1) && !isNaN(num2)) {
    let resultado;

    // Realizar la operación según el operador ingresado
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            // Verificar que no se divida por cero
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: No se puede dividir por cero.");
                resultado = null;
            }
            break;
        default:
            alert("Operación no válida. Usa +, -, * o /.");
            resultado = null;
    }

    // Mostrar el resultado si es válido
    if (resultado !== null) {
        alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
    }
} else {
    alert("Por favor, ingresa números válidos.");
}