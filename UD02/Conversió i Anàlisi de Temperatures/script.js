// Variables dels mesos del 2010
let any2010Juny = 25.8;
let any2010Juliol = 28.6;
let any2010Agost = 30.1;
// Mitjana de les temperaturas de l'any 2010
const mitjanaAny2010 = (any2010Agost + any2010Juliol + any2010Juny) / 3;
// Boolean que comprova si la temperatura mitjana del 2010 és superior a 30 °C
let esMajorDe302010 = mitjanaAny2010 > 30;

// Variables dels mesos del 2015
let any2015Juny = 26.5;
let any2015Juliol = 29.3;
let any2015Agost = 30.8;
// Mitjana de les temperaturas de l'any 2015
const mitjanaAny2015 = (any2015Agost + any2015Juliol + any2015Juny) / 3;
// Boolean que comprova si la temperatura mitjana del 2015 és superior a 30 °C
let esMajorDe302015 = mitjanaAny2015 > 30;

// Variables dels mesos del 2020
let any2020Juny = 27.2;
let any2020Juliol = 29.9;
let any2020Agost = 31.5;
// Mitjana de les temperaturas de l'any 2020
const mitjanaAny2020 = (any2020Agost + any2020Juliol + any2020Juny) / 3;
// Boolean que comprova si la temperatura mitjana del 2020 és superior a 30 °C
let esMajorDe302020 = mitjanaAny2020 > 30;

// Mitjanas de l'any 2010 en Fahrenheit, i Kelvin
const mitjanaAny2010Fahrenheit = (mitjanaAny2010 * 9) / 5 + 32;
const mitjanaAny2010Kelvin = mitjanaAny2010 + 273.15;

// Mitjanas de l'any 2015 en Fahrenheit, i Kelvin
const mitjanaAny2015Fahrenheit = (mitjanaAny2015 * 9) / 5 + 32;
const mitjanaAny2015Kelvin = mitjanaAny2015 + 273.15;

// Mitjanas de l'any 2020 en Fahrenheit, i Kelvin
const mitjanaAny2020Fahrenheit = (mitjanaAny2020 * 9) / 5 + 32;
const mitjanaAny2020Kelvin = mitjanaAny2020 + 273.15;

// Mostra per consola les temperatures mitjanes dels anys 2010, 2015, 2020, i si les mitjanes són superiors a 30 °C
console.log(
  "S'ha temperatura mitjana de 2010 es:\n" +
    mitjanaAny2010 +
    "ºC\n" +
    mitjanaAny2010Fahrenheit +
    "ºF\n" +
    mitjanaAny2010Kelvin +
    "K\n" +
    "¿Es major a 30ºC? " +
    esMajorDe302010 +
    "\n\n" +
    "S'ha temperatura mitjana de 2015 es:\n" +
    mitjanaAny2015 +
    "ºC\n" +
    mitjanaAny2015Fahrenheit +
    "ºF\n" +
    mitjanaAny2015Kelvin +
    "K\n" +
    "¿Es major a 30ºC? " +
    esMajorDe302015 +
    "\n\n" +
    "S'ha temperatura mitjana de 2020 es:\n" +
    mitjanaAny2020 +
    "ºC\n" +
    mitjanaAny2020Fahrenheit +
    "ºF\n" +
    mitjanaAny2020Kelvin +
    "K\n" +
    "¿Es major a 30ºC? " +
    esMajorDe302020
);
