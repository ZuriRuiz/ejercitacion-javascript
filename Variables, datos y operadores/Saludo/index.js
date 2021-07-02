/*
Necesitamos un programa que pida un nombre y un apellido con los siguientes mensajes respectivamente:

¿Cuál es tu nombre?.
¿Cuál es tu apellido?.
Con esta información, el programa deberá mostrar el siguiente mensaje: Hola {nombre} {apellido}, bienvenida a Ada

*/

let nombre = prompt("ingrese su nombre");
let apellido =  prompt("ingrese apellido");
alert("Bienvenida a Ada" + " " + (nombre + " " + apellido));