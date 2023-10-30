// Variable que recive el numero del usuario
let numero = prompt("elige un numero");

// Bucle que solo permite 7 intentos
for(let i = 0;i < 7;i++) {
    // Conversion de numero a cadena
    let numeroCadena = numero.toString();
    // Separacion de la cadena a array
    let separado = numeroCadena.split('');

    // Se ordena el array de menor a mayor
    separado.sort((a, b) => {
        return a-b;
    });

    // Se crea una copia del arry ya ordenado
    let invertido = separado.slice();
    //Se invierte la copia de array (mayor a menor)
    invertido.reverse();

    // Se une denuevo los arrays como numeros
    let unidoNormal = separado.join("");
    let unidoInvertido = invertido.join("");

    // Se assigna el resultado de la resta a la variable del numero inicial
    numero = unidoInvertido - unidoNormal;
    if (numero == 6174) {
        // Se enseña por consola el resultado
        console.log("Tu numero se a convertido en el numero de Kaprekar("+numero+") en "+i+" pasos");
        break;
    }
}

// Aviso de que algo ha hido mal
console.log("Has hecho algo mal!!!");