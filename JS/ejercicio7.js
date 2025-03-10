// Pedir al usuario un número de minutos
let minutos = parseFloat(prompt("Ingresa un número de minutos:"));

// Verificar que el usuario ingresó un número válido
if (!isNaN(minutos) && minutos >= 0) {
    let segundos = minutos * 60;
    let horas = minutos / 60;
    
    alert(`✅ ${minutos} minutos equivalen a:
    ⏳ ${segundos} segundos
    ⏰ ${horas.toFixed(2)} horas`);
} else {
    alert("Por favor, ingresa un número válido y mayor o igual a 0.");
}