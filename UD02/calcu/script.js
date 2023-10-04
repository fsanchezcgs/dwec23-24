// Inicialitzacio de les variables
let nomEstudiant = "Federico";
let notaExamen1 = 4;
let notaExamen2 = 4;
let notaProjecte = 6;
let aprobat;
//Constant que guarda la nota final de l'alumne
const notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6);
// if que comprova si l'alumne ha aprovat
if (notaFinal >= 5) {
    aprobat = true;
} else {
    aprobat = false;
}
// comunica al alumne si esta aprobat
console.log("¿Estas aprobat? " + aprobat);
// Comunica al alumne el resultats de les seves notes
console.log("Estudiant: " + nomEstudiant + "\nNota de l'Examen 1:       " + notaExamen1 + "\nNota de l'Examen 2:       " + notaExamen2 + "\nNota del Projecte:        " + notaProjecte + "\n\nNota Final:               " + notaFinal);
// if que decideix si mereixes se felicitat, o si tens que millorar.
if (notaFinal >= 7) {
    console.log("Felicitats, " + nomEstudiant + " ! Has aprovat el mòdul!");
} else {
    console.log("Tens que millorar sa teva nota.");
}