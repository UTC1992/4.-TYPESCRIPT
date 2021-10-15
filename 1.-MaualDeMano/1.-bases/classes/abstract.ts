(() => {

  // pueden ser plantillas para crear clases
  // no sirve para crear instancias
  // sirve para que otras clases las extiendan
  // sirve para verificar que un objeto extienda de la clase abstracta
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutante {
    salvarAlMundo() {
      return 'Mundo a salvo';
    }
  }
  class Villan extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  // si es const noes necesario poner el tipo a una instancia de la clase
  // si es let alli si let objeto: Mutante;
  const wolvering = new Xmen( 'wolvering', 'logan' );
  const magneto = new Villan('magneto','magnus');

  // console.log( wolvering, magneto );
  // console.log( wolvering.salvarAlMundo(), magneto.conquistarMundo() );

  const printName = ( character: Mutante ): void => {
    console.log( character.realName );
  }

  // printName( wolvering );

})()