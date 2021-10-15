(() => {

  const addNumbers = ( a: number, b: number ) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`;

  // let myFunction: Function;
  // let myFunction: ( x: number, y: number ) => number;
  // let myFunction: ( x: string ) => string;
  let myFunction: ( ) => string;

  //* myFunction = 10;
  //* console.log( myFunction );

  //? myFunction = addNumbers;
  //? console.log( myFunction( 1, 2 ) );

  //? myFunction = greet;
  //? console.log( myFunction( 'Omar' ) );

  myFunction = saveTheWorld;
  console.log( myFunction() );

})()