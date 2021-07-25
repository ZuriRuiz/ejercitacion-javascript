/*
Necesitamos un programa que pida ingresar 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos, mediante los siguientes mensajes:

¿Cúal es la primer escala?
¿Cúal es la duración de la primer escala?
¿Cúal es la segunda escala?
¿Cúal es la duración de la segunda escala?
¿Cúal es la tercer escala?
¿Cúal es la duración de la tercer escala?
Con esta información, el programa deberá mostrar todas las escalas con su duración y la duración total del vuelo con el siguiente mensaje: La duración total del vuelo con escala en {escalaUno} de duración {duracionEscalaUno} hs, {escalaDos} de duración {duracionEscalaDos} hs y {escalaTres} de duración {duracionEscalaTres} hs es: {resultado} hs.


*/

let escalaUno = prompt("¿Cúal es la primer escala?");
let duracionEscalaUno = prompt("¿Cúal es la duración de la primer escala?");
let escalaDos = prompt("¿Cúal es la segunda escala?");
let duracionEscalaDos = prompt("¿Cúal es la duración de la segunda escala?");
let escalaTres = prompt("¿Cúal es la tercer escala?");
let duracionEscalaTres = prompt("¿Cúal es la duración de la tercer escala?");
let resultado = duracionEscalaUno + duracionEscalaDos + duracionEscalaTres;
let mensaje = `La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscalaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs.`;
alert(mensaje);

