/*
Necesitamos un programa que pida ingresar una edad con el siguiente mensaje:

Ingresá una edad por favor
El programa deberá mostrar el equivalente de esa edad en años perro mediante el siguiente mensaje El equivalente de {edad} en años perros es: {resultado}

*/

let edad = prompt("Ingresá una edad por favor");
let resultado = edad * 7;
let mensaje = `El equivalente de ${edad} en años perros es: ${resultado}`;
alert(mensaje);