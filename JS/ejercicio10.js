// Definir el objeto auto con al menos 6 propiedades
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    color: "Rojo",
    velocidadMaxima: 180, // en km/h
    tipoCombustible: "Gasolina",
    potencia: 169, // en caballos de fuerza
    transmision: "Automática"
};

// Mostrar el objeto en la consola
console.log(auto);

// Usar document.write para mostrar un mensaje dinámico con dos propiedades
document.write(`El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes en el mercado alcanzando una velocidad de ${auto.velocidadMaxima} km/h.`);
