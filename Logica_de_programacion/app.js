// variables 
let tryit = 15;
let numeroSecreto = parseInt(Math.random()*tryit)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximosIntentos = 3;
while(numeroUsuario != numeroSecreto){
    let numeroUsuario = prompt(`Me indicas un numero entre el 1 y el ${tryit} por favor:`);

    console.log(numeroUsuario);
    /*
    Esto es un ejemplo
    */
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez": 'veces' }.`);
        break
    }
    else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else { 
            alert('El número secreto es mayor');
        }
        //intentos = intentos + 1;
        intentos++;
        palabraVeces = "veces"
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos :(`);
            break
        }
        // alert('No acertaste el número');
    }
    
}