/*

Ejercicio imagen.


Queremos crear una página que nos permita modificar el tamaño de una imagen que fue agregada previamente en el documento HTML. 
Para ello se debe poder ingresar mediante un prompt alguna de las opciones posibles (chica, mediana y grande) 
y dependiendo de la opción elegida modifique el tamaño de una imagen . 
Por ejemplo:

chica	200px
mediana	500px
grande	800px

*/

const imagen = document.querySelector(".imagen");
const imagentamanio = prompt("ingrese cual tamaño de imagen de las siguientes opciones quiere: chica, mediana, grande")

if(imagentamanio == "chica"){
    imagen.style.width = "200px"
}if(imagentamanio == "mediana"){
    imagen.style.width = "500px"
}if(imagentamanio == "grande"){
    imagen.style.width = "800px"
}