/*
Necesitamos un programa que permita ingresar nombre, apellido, edad, nacionalidad y número de documento con los siguientes mensajes respectivamente:

¿Cuál es tu nombre?.
¿Cuál es tu apellido?.
¿Cuál es tu apellido?.
¿Cuál es tu edad?
¿Cuál es tu nacionalidad?
¿Cuál es tu número de documento?
Con esta información, el programa deberá mostrar el siguiente mensaje: El nuevo perfil fue ingresado al sistema: nombre: {nombre}, apellido: {apellido}, edad: {edad}, nacionalidad: {nacionalidad}, número de documento: {dni}


*/

let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");
let edad = prompt("¿Cuál es tu edad?");
let nacionalidad = prompt("¿Cuál es tu nacionalidad?");
let numeroDeDocumento = prompt("¿Cuál es tu número de documento?");
let mensaje = `El nuevo perfil fue ingresado al sistema: nombre: ${nombre}, apellido: ${apellido}, edad: ${edad}, nacionalidad: ${nacionalidad}, número de documento: ${numeroDeDocumento}`;
alert(mensaje);