// Pedir el radio al usuario
let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

// Verificar que el usuario ingresó un número válido
if (!isNaN(radio) && radio > 0) {
    let perimetro = 2 * Math.PI * radio;
    console.log(`El perímetro del círculo es: ${perimetro.toFixed(2)}`);
} else {
    console.log("Por favor, ingresa un número válido y mayor a 0.");
}