// Desafío "AMIGO SECRETO" By Raúl Trueba ONE G9 2025

/*Declaración y asignación de variables
asigna listas de html a variables
*/
let listaAmigos = [];
let amigoAdd = "";
let elementoLista1 = document.getElementById("listaAmigos");
let elementoLista2 = document.getElementById("resultado");

/*Agrega al arreglo los nombres desde caja de texto al hacer clic en botón añadir
Valida que no se encuentre vacia la caja de texto y hace trim a espacios
*/
function agregarAmigo(){    
    amigoAdd = document.getElementById("amigo").value;
    if (amigoAdd.trim(" ") != ""){
        listaAmigos.push(amigoAdd.trim(" "));
        document.getElementById("amigo").value = "";
        //console.log(listaAmigos);
        barreLista();
    }else{
        alert("¡Error - Dato inválido! \nEl campo está vacío. \n¡Ingresa un nombre válido!")
        //console.log("no hay datos");
    }
    asignaFoco("amigo");
}

/*Revisa todos los nombres del arreglo y los agrega a la lista en pantalla
*/
function barreLista(){
    let parametro = "";
    borrarLista();
    for (let numeroLista = 0;numeroLista <= (listaAmigos.length-1);numeroLista++){
        //console.log(`Nombre en lista: ${numeroLista} - ${listaAmigos[numeroLista]}`);
        addNombreLista(`${numeroLista + 1} - ${listaAmigos[numeroLista]}`);
    }    
}

/*Detecta si la lista tiene datos y los borra
*/
function borrarLista(){    
    if(elementoLista1){
        //console.log(elementoLista1);
        //elementoLista1.getElementById("listaAmigos").value = "";
        elementoLista1.replaceChildren();
    }else {
        //console.log("Vacío");
    }
}

/*Agrega los nombres a la lista en pantalla
*/
function addNombreLista(nombreLista){
    let amigoLista = document.createElement("li");
    amigoLista.textContent = nombreLista;   
    elementoLista1.appendChild(amigoLista);
}

/*Genera número aleatorio del primer arreglo al último (0 a X)
y lo muestra en pantalla alpresionar el botón "Sortear amigo"
devuelve el foco a la caja de texto
*/
function sortearAmigo(){
    let sorteo = Math.floor(Math.random()*listaAmigos.length-1)+1;
    let resultado = document.createElement("li");
    resultado.textContent = `Nombre sorteado => ${listaAmigos[sorteo]}`;
    elementoLista2.appendChild(resultado);
    asignaFoco("amigo");
    borrarLista();
    //console.log(`Nombre sorteado ${listaAmigos[sorteo]}`);
}

function asignaFoco(elementHTML){
    document.getElementById(elementHTML).focus();
}