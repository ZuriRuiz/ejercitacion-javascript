/*
Ejercicio 2. Color 
Ale, quien se encarga del diseño en su trabajo, nos pidió un programa que la ayude a visualizar los colores, 
para lograrlo vamos a crear una página que al iniciar pida mediante un prompt ingresar un color en sistema hexadecimal, 
y una vez ingresado ponga el color de fondo del body con dicho color.

*/

const colorUsuario = prompt("ingrese un color hexadecimal")
const bodyColor = document.querySelector(".color")

bodyColor.style.backgroundColor = colorUsuario;