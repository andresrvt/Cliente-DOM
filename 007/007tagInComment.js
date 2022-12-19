/* 007tagInComment.html/.js: Etiqueta en comentario: ¿Qué muestra este código? */

"use strict";

/* Muestra BODY, debido a que .tagName nos devuelve el nombre en mayúsculas, convirtiéndose en el único nodo hijo.
Por tanto, cuando mostramos en primer hijo con firstChild.data (.data muestra en contenido de los comentarios), nos aparecerá BODY*/