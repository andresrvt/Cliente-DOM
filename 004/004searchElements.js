/* 003diagonal.html/.js: Seleccionar todas las celdas diagonales Escribe el código para 
pintar todas las celdas diagonales de rojo. Necesitarás obtener todas las <td> de la 
<table> y pintarlas usando el código:
td debe ser la referencia a la celda de la tabla
td.style.backgroundColor = 'red'; El resultado debe ser:  */

"use strict";

let tds = document.querySelectorAll("td");
let numeroCeldas = document.querySelectorAll("tr");

for (let index = 0; index < tds.length; index++) {
    // Para rellenar la diagonal en una tabla cuadrada, buscaremos la longitud de filas y le añadiremos uno. 
    if (index%(numeroCeldas.length+1)==0) {
        tds[index].style.backgroundColor = 'red';
    }
}