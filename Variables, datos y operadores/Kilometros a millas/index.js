/*
Necesitamos un programa que pida una cantidad de kilómetros mediante el mensaje:

Ingresá una cantidad de kilómetros por favor
Con esta información, el programa deberá mostrar el resultado de la conversión de kilómetros a millas mediante el siguiente mensaje: El resultado de la conversión de {kilometros} kilometros a millas es: {resultado}

*/

let kilometros = prompt("Ingresa una cantidad de Kilometros");
let resultado = kilometros * 0.62;
let mensaje = `El resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}`;
alert(mensaje);