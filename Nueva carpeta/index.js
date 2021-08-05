/*
En un documento HTML vamos a crear una lista desordenada con distintos países, dos de cada continente, 
para luego destacar los que pertenezcan al continente que ingresaremos mediante un prompt.

Consideraciones:

Los li deben tener un atributo data-continente que se corresponda con el continente al cual pertenecen, 
por ejemplo, si ponemos Argentina, el atributo debería ser data-continente="América".

*/


const usuario = prompt("ingrese un pais")
const continente1 =  document.getElementById("America")
const continente2 = document.getElementById("Oceania")
const continente3 = document.getElementById("Africa")
const continente4 = document.getElementById("Asia")
const continente5 = document.getElementById("Europa")