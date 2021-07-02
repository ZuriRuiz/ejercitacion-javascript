/*
Nos pidieron un programa que permita ingresar el nombre de una playlist y el título de tres canciones, mediante los siguiente mensajes:

¿Cuál es el nombre de la playlist?
¿Cuál es la primera canción?
¿Cuál es la segunda canción?
¿Cuál es la tercera canción?
Con está información el programa deberá mostrar el siguiente mensaje: Se ha creado la playlist {playlist} con las canciones {cancion1}, {cancion2}, {cancion3}

*/

let playlist = prompt("¿Cuál es el nombre de la playlist?");
let cancion1 = prompt("¿Cuál es la primera canción?");
let cancion2 = prompt("¿Cuál es la segunda canción?");
let cancion3 = prompt("¿Cuál es la tercera canción?");
let mensaje = `Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2}, ${cancion3}`;
alert(mensaje); 