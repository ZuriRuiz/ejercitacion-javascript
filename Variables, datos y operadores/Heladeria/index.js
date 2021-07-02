/*

Necesitamos un programa para una heladería que permita ingresar tres gustos de helado con los siguientes mensajes respectivamente:

¿Cuál es el primer gusto?.
¿Cuál es el segundo gusto?
¿Cuál es el tercer gusto?.
Con esta información, el programa deberá mostrar el siguiente mensaje: Aquí tiene su helado de {gusto1}, {gusto2} y {gusto3}

*/

let gustoUno = prompt("¿Cuál es el primer gusto?");
let gustoDos = prompt("¿Cuál es el segundo gusto?");
let gustoTres = prompt("¿Cuál es el tercer gusto?");
let mensaje = `Aqui tiene su helado ${gustoUno}, ${gustoDos} y ${gustoTres}`;
alert(mensaje);