(() => {

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Heroe: Volcán Negro`;

    //diferentes formas de concatenar
    console.log(`I'm ${batman}`);
    console.log(batman + ' vs ' + linternaVerde);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toLocaleUpperCase() || 'No son suficientes caracteres');
    
})();