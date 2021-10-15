(() => {

  class Apocalipsis {

    static instance: Apocalipsis;

    private constructor(
      public name: string,
    ) {}

    static callApocalipsis(): Apocalipsis {
      if ( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico');
      }
      return this.instance;
    }

    changeName( newName: string ): void {
      this.name = newName;
    }

  }

  const apo1 = Apocalipsis.callApocalipsis();
  const apo2 = Apocalipsis.callApocalipsis();

  // const apo1 = new Apocalipsis( 'Hola mundo' );
  // const apo2 = new Apocalipsis( 'Hola mundo' );
  // const apo3 = new Apocalipsis( 'Hola mundo' );

  apo1.changeName('gato');
  console.log( apo1, apo2 );

})()