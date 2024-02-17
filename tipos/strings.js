"use strict";
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "Heroe: Volc\u00E1n Negro";
    //diferentes formas de concatenar
    console.log("I'm ".concat(batman));
    console.log(batman + ' vs ' + linternaVerde);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No son suficientes caracteres');
})();
