/*

Ejercicio RGB.

Ale también nos pidió un programa para trabajar con los colores en sistema rgb, para ello vamos a crear una página que al iniciar pida mediante tres prompts los valores correspondientes al sistema rgb, y una vez ingresados ponga el color de fondo del body con dicho color. 
Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const color2 = prompt("ingrese color rgb 2");
const color3 = prompt("ingrese color rgb 3");

bodyColor.style.backgroundColor = color2;
bodyColor.style.backgroundColor = color3;
*/
const bodyColor = document.querySelector("body");
const color1 = prompt("ingrese color rgb 1");

bodyColor.style.backgroundColor = color1;
