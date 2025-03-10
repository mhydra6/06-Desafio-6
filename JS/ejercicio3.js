// Pedir un número al usuario
let numero = parseInt(prompt("Ingresa un número:"));

// Verificar que el usuario ingresó un número válido
if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }
} else {
    alert("Por favor, ingresa un número válido.");
}