(() => {

  let avenger: any = 123;
  let exist;
  let power;

  avenger = 'doc strange';
  // le digo a typescript que trate a la variablre
  // como un string es casteo
  console.log( (avenger as string ).charAt( 2 ));

  avenger = 1123;
  // lo mismo de arriba pero de otra forma
  console.log( (<number>avenger).toFixed( 2 ));

})()