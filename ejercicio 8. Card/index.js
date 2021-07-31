/*

Necesitamos hacer un programa para completar los datos de una card, para ello al iniciar el mismo debe pedir mediante prompts por:

un título h1;
una url de una imagen;
una url a un artículo.
Previamente en un documento HTML haremos una card que tenga:

una clase card;
una imagen, con la url de la imagen ingresada;
un título, con el texto del título ingresado;
un link que diga Leer más, con la url al artículo ingresado.

*/

const usuarioTitulo = prompt("ingrese un titulo para su card")
const usuarioImagen = prompt("ingrese la url de una imagen para su card")
const usuarioUrlArticulo = prompt("ingrese una url a un articulo")

const titulo = document.querySelector("h1")
const imagen = document.getElementById("imagen")
const url = document.getElementById("articulo")

titulo.textContent = usuarioTitulo;
imagen.src = usuarioImagen;
url.href = usuarioUrlArticulo;