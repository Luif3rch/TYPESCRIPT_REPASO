(() => {
    let avengers:number = 10;

    console.log(avengers); // undefined

    const villians:number = 20;

    if( avengers < villians ) {
        console.log('We are in trouble');
    }else {
        console.log('We are safe');
    }
    
    avengers = Number('123');
    console.log({avengers});

})()