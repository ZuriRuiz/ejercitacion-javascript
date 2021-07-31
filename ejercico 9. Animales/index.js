/*

Ejercicio 9. Animales

Queremos hacer una página para filtrar animales mediante un prompt.   

Para ello, en un documento HTML vamos a agregar tres imágenes de distintos animales, 
con un atributo data-animal que se va a corresponder con las opciones que podemos ingresar en el prompt. 
Por ejemplo, si tuviésemos una imagen de un hipocampo, debería tener un atributo data-animal= "hipocampo".

*/

const animalUsuario = prompt("ingrese cual de estos animales quiere ver en pantalla? loro, gato o lobo")
const loro = document.querySelector(".loro")
const gato = document.querySelector(".gatito")
const lobo = document.querySelector(".lobo")

if(animalUsuario == "loro"){
    loro.src = "loro.jpg";
}if(animalUsuario == "gato"){
    gato.src = "gato.jpg";
}if(animalUsuario == "lobo"){
    lobo.src = "lobo.jpg";
}