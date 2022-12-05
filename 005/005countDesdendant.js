/* 005countDesdendant.html/.js: Hay un árbol estructurado como ul/li anidado.
Escribe el código que para cada <li> muestra:
¿Cuál es el texto dentro de él (sin el subárbol)?
El número de <li> anidados: todos los descendientes, incluidos los profundamente 
anidados. */

"use strict";

let textoLi = document.querySelectorAll("ul > li > ul > li > ul > li")
for (let iterator of textoLi) {
    console.log(iterator.textContent);
}

let allLi = document.querySelectorAll("li")
console.log(allLi.length)