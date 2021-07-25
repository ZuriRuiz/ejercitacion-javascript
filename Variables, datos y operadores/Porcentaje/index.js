/*
Necesitamos un programa que pida ingresar un número, y luego el porcentaje que se desea obtener del mismo mediante los siguientes mensajes:

Ingresá un número
Ingresá un porcentaje
Con esta información, el programa deberá mostrar el resultado del porcentaje mediante el siguiente mensaje: El porcentaje {porcentaje} del número {numero} es: {resultado}

*/

let numero = prompt("Ingresa un numero");
let porcentaje = prompt("Ingresa un porcentaje");
let resultado = (numero * porcentaje) / 100;
let mensaje = `El porcentaje ${porcentaje} del numero ${numero} es: ${resultado}`;
alert(mensaje);