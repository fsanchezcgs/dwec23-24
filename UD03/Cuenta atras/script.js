let elCrono;
let miFecha = new Date();
let lahora = document.getElementById("lahora");

miFecha.setHours(0, 0, 5, 0);

lahora.innerHTML = "00:00:05";

function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos -= 1;

    if(horas == 0 && minutos == 0 && segundos == 0) {
        stop();
    }

    if(segundos == -1) {
        segundos = 60;
        minutos -= 1;

        miFecha.setMinutes(minutos);
    }

    miFecha.setSeconds(segundos);

    if (horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}

    lahora.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function reiniciarCrono() {
    miFecha.setHours(0, 0, 5, 0);

    lahora.innerHTML = "00:00:05";
}

function start() {
    elCrono = setInterval(crono, 1000);
}

function stop() {
    clearInterval(elCrono);
}

function reset() {
    setTimeout(reiniciarCrono)
}