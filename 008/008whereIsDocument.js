/* 008whereIsDocument.html/.js: ¿Dónde está el "document" en la jerarquía?
¿A qué clase pertenece el document?
¿Cuál es su lugar en la jerarquía DOM?
¿Hereda de Node o Element, o tal vez HTMLElement? */

"use strict";

alert(document);

// Pertenece a la clase HTMLDocument. En cuanto a la jerarquía, lo único que tiene por encima sería window.

alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name);

// 

