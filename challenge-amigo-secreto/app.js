// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function mostrarAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');

    // limpiear la lista existente
    listaAmigos.innerHTML = '';

    // Recorrer el array y añadir elementos a la lista
    for (let i = 0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // validar que el nombre no este vacio 
    if (nombreAmigo === ''){
        alert('Por favor, inserte un nombre');
        return;
    } else {
        amigos.push(nombreAmigo);
    }

    inputAmigo.value = '';
    mostrarAmigos();
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('No hay amigos para sortear, agrega a algunos primero');
        return;
    }
    // generar numero/indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);

    // obtener amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // mostrar resultado
    const resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

console.log(amigos);
