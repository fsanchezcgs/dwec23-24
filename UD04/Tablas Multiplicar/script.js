// Array que
let tablas = new Array(10);

for(let i = 0; i < tablas.length;i++) {
    tablas[i] = new Array(11);
}

for(let fila = 0; fila < tablas.length; fila++) {
    for(let col = 0; col < tablas[fila].length; col++) {
        if((fila * col) % 2 != 0) {
            tablas[fila][col] = fila * col;
        }
    }
}

for(let fila = 0; fila < tablas.length; fila++) {
    console.log("Tabla del " + fila);
    for(let col = 0; col < tablas[fila].length; col++) {
        if((fila * col) % 2 != 0) {
            console.log(fila + " * " + col + " = " + tablas[fila][col]);
        }
    }
}