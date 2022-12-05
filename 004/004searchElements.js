/* 004searchElements.html/.js:Aquí está el documento con la tabla y el formulario.
¿Cómo encontrar?...
La tabla con id="age-table".
Tdos los elementos label dentro de la tabla (debería haber 3).
El primer td en la tabla (con la palabra “Age”).
El form con name="search".
El primer input en ese formulario.
El último input en ese formulario.
Abra la página index.html en una ventana separada y haga uso de las herramientas del 
navegador. */

"use strict";

let tablaID = document.getElementById("age-table");
tablaID.style.background = "red";

let labels = document.querySelectorAll("td > label");
alert(labels.length);

let firstTd = document.querySelector("td");
alert(firstTd.textContent); 

let formSearch = document.querySelector("form[name ='search']");
formSearch.style.background = "blue";
console.log(formSearch);

let firstInput = document.querySelector("form[name = 'search'] > label > input");
console.log(firstInput);

let lastInput = document.querySelector("form[name = 'search'] > input:last-child");
console.log(lastInput);