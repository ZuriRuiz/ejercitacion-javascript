/*
Necesitamos un programa que pida ingresar los siguientes datos de una dirección: calle, número, departamento, código postal, ciudad y país, mediante los siguiente mensajes respectivamente:

¿Cuál es la calle?.
¿Cuál es el número?.
¿Cuál es el departamento?
¿Cuál es el código postal?
¿Cúal es la ciudad?
¿Cúal es el país?
Con está información el programa deberá mostrar el siguiente mensaje: La dirección que ha ingresado es: {calle} {numero} {departamento}, {codigoPostal}, {ciudad}, {pais}

*/

let calle =  prompt("¿Cuál es la calle?");
let numero = prompt("¿Cuál es el número?");
let departamento = prompt("¿Cuál es el departamento?");
let codigoPostal =  prompt("¿Cuál es el código postal?");
let ciudad = prompt("¿Cúal es la ciudad?");
let pais = prompt("¿Cúal es el país?");
let mensaje = `La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`;
alert(mensaje);