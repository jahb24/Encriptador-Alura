let letrasEncriptadas = ["enter","imes","ai","ober","ufat"];
let letras = ["e", "i", "a", "o", "u"];
let palabrasEncriptadas = [];
let historial = 0;

let palabra = document.getElementById("por-encriptar");
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let encriptado = document.getElementById("encriptado");
let copiar = document.getElementById("copiar");
let caja = document.getElementById("caja-encriptado");

function encriptador(texto){
        for(let i=0; i<letras.length; i++){
            texto = texto.replaceAll(letras[i], letrasEncriptadas[i]);
        }
    return texto;
}
function desEncriptador(texto){
    for(let i=0; i<letras.length; i++){
        texto = texto.replaceAll(letrasEncriptadas[i], letras[i]);
    }
    return texto;
}

function encriptar(){
    palabrasEncriptadas.push(encriptador(palabra.value));
    
    if(document.body.offsetWidth <= 1160){
        if(palabrasEncriptadas.length > 1){
            encriptado.firstChild.remove();
            encriptado.firstChild.remove();
            palabrasEncriptadas.shift();
        }
    }
    else{
        if(palabrasEncriptadas.length > 10){
            /*encriptado.innerText = encriptado.innerText.replace(palabrasEncriptadas[0], "");*/
            encriptado.firstChild.remove();
            encriptado.firstChild.remove();
            palabrasEncriptadas.shift();
        }
            
    }
    historial = palabrasEncriptadas.length - 1;
    /*for(let i=0; i<palabrasEncriptadas.length; i++){
        encriptado.innerText += palabrasEncriptadas[i];
    }*/
    encriptado.innerHTML += palabrasEncriptadas[historial] + "<br>";
    
    mostrarEncriptado();
    palabra.value = '';
}
function desencriptar(){
    palabrasEncriptadas.push(desEncriptador(palabra.value));
    
    if(document.body.offsetWidth <= 1160){
        if(palabrasEncriptadas.length > 1){
            encriptado.firstChild.remove();
            encriptado.firstChild.remove();
            palabrasEncriptadas.shift();
        }
    }
    else{
        if(palabrasEncriptadas.length > 10){
            /*encriptado.innerText = encriptado.innerText.replace(palabrasEncriptadas[0], "");*/
            encriptado.firstChild.remove();
            encriptado.firstChild.remove();
            palabrasEncriptadas.shift();
        }
            
    }
    historial = palabrasEncriptadas.length - 1;
    /*for(let i=0; i<palabrasEncriptadas.length; i++){
        encriptado.innerText += palabrasEncriptadas[i];
    }*/
    encriptado.innerHTML += palabrasEncriptadas[historial] + "<br>";
    
    mostrarEncriptado();
    palabra.value = '';
}

function mostrarEncriptado(){
    document.getElementById("muñeco").setAttribute('hidden', 'true');
    document.getElementById("sin-texto").setAttribute('hidden', 'true');
    document.getElementById("ingresa-texto").setAttribute('hidden', 'true');
    encriptado.removeAttribute('hidden');
    copiar.removeAttribute('hidden');
}
function copia(){
    palabra.value = palabrasEncriptadas[historial];
    alert("Último elemento Copiado!");
}


palabra.addEventListener("keyup", function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90){
        if(event.key != event.key.toLowerCase()){
            alert("Solo se aceptan letras minúsculas");
            palabra.value = '';
        }
    }
    else{
        if(event.keyCode == 32 || event.keyCode == 8 || event.key == 'Shift' || event.key == 'CapsLock' || event.key == 'Control'){
            return;
        }
        if(event.key == 'Enter'){
            if(palabra.value == '')
                return;
            encriptar();
            return;
        }
        alert("Solo se aceptan letras minúsculas");
        palabra.value = '';
    }
});


//palabraEncriptada = encriptador(palabra);
//alert(palabraEncriptada);


/*
let tamañoPalabra = palabra.length;
let iterador = 0;
while(iterador < tamañoPalabra){
    for(let i = 0; i < letras.length; i++){
        if(palabra[iterador] == letras[i]){
            palabra[iterador] = letrasEncriptadas[i];
        }
    }
    iterador++;
}*/

//alert(`La palabra encriptada es ${palabra}`);