// Definir tasa de conversión y porcentaje de IVA
const TASA_CAMBIO = 1130; // 1 dólar = 1130 pesos
const IVA = 0.21; // 21%

// Pedir el precio en dólares al usuario
let precioDolares = parseFloat(prompt("Ingresa el precio del producto en dólares:"));

// Verificar que el usuario ingresó un número válido
if (!isNaN(precioDolares) && precioDolares > 0) {
    let precioPesos = precioDolares * TASA_CAMBIO; // Convertir a pesos
    let precioConIVA = precioPesos * (1 + IVA); // Aplicar el IVA
    
    alert(`💰 Precio en dólares: $${precioDolares.toFixed(2)}
💵 Precio en pesos sin IVA: $${precioPesos.toFixed(2)}
📈 Precio final con IVA (21%): $${precioConIVA.toFixed(2)}`);
} else {
    alert("Por favor, ingresa un número válido y mayor a 0.");
}