/*

Queremos hacer un programa para una red social que al iniciarse 
pregunte mediante tres prompts por la cantidad de cada una de las reacciones 
y actualice los valores de los spans correspondientes. 
Para ello previamente en un documento HTML haremos un post que contenga:

un h3 con la usuaria;
un p con un lorem ipsum;
3 spans de reacciones con un ícono más un número con la cantidad.
Los emojis que utilizaremos son:
👍 (me gusta);
❤️ (me encanta);
😮 (me asombra).
 Consideraciones:

la tipografía debe ser Poppins de Google Fonts;
los spans deben estar en línea, separados con márgenes de 15px Y tener color de fondo gris suave.

*/

const usuarioMeGusta = prompt("ingrese la cantidad de me gusta")
const usuarioMeEncanta = prompt("ingrese la cantidad de me encanta")
const usuarioMeAsombra = prompt("ingrese la cantidad de me asombra")

const spanLike = document.getElementById("like")
const spanMeEncanta = document.getElementById("meEncanta")
const spanMeAsombra = document.getElementById("meAsombra")

spanLike.textContent = `${usuarioMeGusta} 👍`;
spanMeEncanta.textContent = `${usuarioMeEncanta} ❤️`;
spanMeAsombra.textContent = `${usuarioMeAsombra} 😮`;