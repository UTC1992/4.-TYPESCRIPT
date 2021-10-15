(() => {

  // es una funcion que usual mente termina en error
  // never significa que ya no se seguira ejecuando el codigo
  // el never no debe tener un punto alcanzable
  const abc = ( message: string ): never => {
    throw new Error( message );
  }

  const abc2 = ( message: string ): (never | number) => {
    if ( false ) {
      throw new Error( message );
    }
    return 1;
  }

  abc('auxilio');

})()