/* Si elem – es un elemento nodo arbitrario del DOM...
¿Es cierto que elem.lastChild.nextSibling siempre es null?
¿Es cierto que elem.children[0].previousSibling siempre es null ?
Demúestralo. */

"use strict";

let elem = document.querySelector("ul");

// Sí, siempre será null debido a que elem.lastChild ya busca el último elemento, por lo que al intentar acceder al siguiente dará null.
let prueba = elem.lastChild.nextSibling;
alert(prueba);

// No tiene por qué, ya que con elem.children[0].previousSibling puede coger el mismo nodo padre o uno anterior.
let prueba1 = elem.children[0].previousSibling;
alert(prueba1);