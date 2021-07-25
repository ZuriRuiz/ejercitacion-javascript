/*
Necesitamos un programa que pida ingresar el valor de la base y el valor de la altura de un rectángulo mediante los siguientes mensajes:

Ingresá el valor de la base del rectángulo
Ingresá el valor de la altura del rectángulo
Con esta información, el programa deberá mostrar el resultado del perímetro del rectángulo mediante el siguiente mensaje: El resultado del perímetro del rectángulo con base {base} y altura {altura} es: {resultado}

*/

let base = prompt("Ingresá el valor de la base del rectángulo");
let altura = prompt("Ingresa el valor de la altura del rectangulo");
let resultado = base * altura;
let mensaje = `El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}`;
alert(mensaje);