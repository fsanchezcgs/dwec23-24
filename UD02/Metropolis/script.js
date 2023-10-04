// Inicialitzacio de les variables
let esCapital = false;
let numeroCiudadanos = 200001;
let impuesoPorCiudadano = 720000001;
// if que decide si es una metropolis.
if(esCapital == true && numeroCiudadanos <= 100000) {
    console.log("Es una metropolis");
} if(esCapital == false && numeroCiudadanos > 200000 && impuesoPorCiudadano > 720000000) {
    console.log("Es una metropolis");
} else {
    console.log("No es una metropolis");
}

// version profe

const primerCon = esCapital && numeroCiudadanos > 100000;
const segunConA = numeroCiudadanos > 200000;
const segunConB = numeroCiudadanos * impuesoPorCiudadano * 12 > 720000000;
const segunCon = segunConA && segunConB;
const esMetropolis = primerCon || segunCon;

console.log(esMetropolis);