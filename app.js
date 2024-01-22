/*
let numeroSecreto = 0;
let contador = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en: ${contador} ${(contador == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if(numeroDeUsuario > numeroSecreto){
        //El usuario no acertó
        asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    contador++;
    limpiarCaja();
return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya se alcanzó el máximo numero de numeros sorteados
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Se alcanzó el número máximo de números disponibles');
    //Si el numero generado está en la lista
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        //Si el numero no está agregado en la lista
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados)
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
//Necesitamos limpiar la caja 
    limpiarCaja();
// Reiniciar las condiciones
    condicionesIniciales();
//Deshabilitar el botón de nuevo juego}
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Índica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
    return;
}

condicionesIniciales();
*/

//----------------------
//Desafíos sección 4
//Desafío 4-1
let listaGenerica = [];
console.log(listaGenerica);
//Desafío 4-2
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
//Desafío 4-3
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('Golang');
//Desafío 4-4
function lenguajes(){
   for(let i = 0; i < lenguajesDeProgramacion.length ; i++){
    console.log(lenguajesDeProgramacion[i]);
   }
}
lenguajes();
//Desafío 4-5
function lenguajesInverso(){
   for(let i = 7; i >= 0 ; i--){
    console.log(lenguajesDeProgramacion[i]);
   }
}
lenguajesInverso();
//Desafío 4-6
function promedio (lista){
    let suma = 0;
    for(let i=0 ;i<lista.length;i++){
        suma+=lista[i];
    }
    return console.log(suma/numeros.length);
}
let numeros = [10,20,30,40];
promedio(numeros);
