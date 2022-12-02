/* Para cada una de las siguientes preguntas, da al menos una forma de cómo acceder a 
ellos:
¿El nodo <div> del DOM?
¿El nodo <ul> del DOM?
El segundo <li> (con Peter Parker)? */

"use strict";

// Nodo div.
let divs = document.querySelectorAll("div");
for(let elementos of divs){
    alert(elementos.innerHTML);
}

// ¿El nodo <ul> del DOM?
let uls = document.querySelectorAll("ul");
for(let elementos of uls){
    alert(elementos.innerHTML);
}

// El segundo <li> (con Peter Parker)?
let segundoLi = document.querySelectorAll("ul > li:last-child");
for(let elementos of segundoLi){
    alert(elementos.innerHTML);
}