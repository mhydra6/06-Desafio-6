// Definir el array con las películas o series pendientes
let miListaDePendientes = ["Stranger Things", "Breaking Bad", "El juego del Calamar", "Supernatural"];

// Mostrar el array inicial en la consola
console.log("Lista inicial de pendientes:", miListaDePendientes);

// Pedir al usuario que ingrese una nueva película y agregarla al array usando push
let nuevaPelicula = prompt("Ingresa una nueva película o serie para agregar a la lista:");
miListaDePendientes.push(nuevaPelicula);

// Modificar la segunda película del array (índice 1) con un nuevo título
let nuevaSegundaPelicula = prompt("Ingresa el nuevo título para la segunda película:");
miListaDePendientes[1] = nuevaSegundaPelicula;

// Mostrar el array actualizado en la consola
console.log("Lista de pendientes actualizada:", miListaDePendientes);
