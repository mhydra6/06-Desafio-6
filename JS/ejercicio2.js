// Solicitar el nombre al usuario
let nombre = prompt("¿Cuál es tu nombre?");

// Verificar que el usuario ingresó un nombre
if (nombre) {
    console.log(`Hola, ${nombre}, ¡Bienvenido al Bootcamp!`);
} else {
    console.log("No ingresaste un nombre. ¡Inténtalo de nuevo!");
}