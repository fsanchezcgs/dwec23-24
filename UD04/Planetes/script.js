// Arrays que contienen la informacion de los planetas
let nombres = ["marte", "urano", "jupiter", "saturno", "venus"];
let distancias = [228000000, 3000000000, 750000000, 1500000000, 108200000];
let tamanyos = [0.53, 3.98, 10.97, 9.14,0.95];
let anyoDeDescubrimiento = [1610, 1781, 1610, 1610, 1610];

// Constructor planeta
function Planeta() {
    // Atributos de planeta
    this.nombre;
    this.distancia;
    this.tamanyoRelativo;
    this.fechaDescubrimiento;

    // Metodo para mostrar la informacion de los planetas
    this.mostrarInformacion = function() {
        return "Nombre: " + this.nombre + "\nDistancia al Sol: " + this.distancia + "\nTamaño relativo: " + this.tamanyoRelativo + "\nFecha de descubrimiento: " + this.fechaDescubrimiento;
    };
}

// Array de objetos planetas
let listaPlanetas = [new Planeta(), new Planeta(), new Planeta(), new Planeta(), new Planeta()];

// Bucle para crear los objetos planetas
for(let i = 0; i < nombres.length; i++) {
    listaPlanetas[i].nombre = nombres[i];
    listaPlanetas[i].distancia = distancias[i];
    listaPlanetas[i].tamanyoRelativo = tamanyos[i];
    listaPlanetas[i].fechaDescubrimiento = anyoDeDescubrimiento[i];
}

// Bucle para mostrar por consola los datos
for(let i = 0; i < listaPlanetas.length ; i++) {
    console.log(listaPlanetas[i].mostrarInformacion());
}