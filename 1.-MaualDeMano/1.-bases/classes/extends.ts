(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      // console.log('constructor avenger llamado');
    }

    private getFullName(): string {
      return `${ this.name } ${ this.realName }`;
    }

  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super( name, realName );
      // console.log( 'constructor xmen llamado' );
    }

    get fullName(): string {
      return `${this.name} ${this.realName}`;
    }

    set fullName( name: string ) {
      if ( name.length <= 3 ) {
        throw new Error('El nombre debe ser mayor de 3 letras');
      }
      this.name = name;
    }

    getFullNameDesdeXmen() {
      
    }
  }

  const wolvering = new Xmen('wolvering', 'logan', true );

  // console.log( wolvering.fullName );
  // wolvering.fullName = 'per';
  // console.log( wolvering.fullName );

})()