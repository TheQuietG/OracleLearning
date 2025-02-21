/*     let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del número secreto';

    let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
if (listaNumerosSorteados.lenght == numeroMax){
    asignarTexto('p', 'Ya se sortearon todos los números posibles'); 
} else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else { 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTexto('p', `Acertaste el número en ${intentos} ${(intentos==1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroUsuario < numeroSecreto) {
            asignarTexto('p', 'El número es mayor');
        } else asignarTexto('p', 'El número es menor');
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
    
}

function condicionesIni(){ 
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto)
}
function reiniciarJuego(){
    //limpiar caja, mensaje de inicio, generar numero aleatorio, deshabilitar el boton nuevamente, reinicio de intentos
    limpiarCaja();
    condicionesIni();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIni();

