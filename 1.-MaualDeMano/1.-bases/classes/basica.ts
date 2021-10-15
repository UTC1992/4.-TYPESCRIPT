(() => {

  class Avenger {
    
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAveAge(): string {
      return this.name;
    }

    constructor( 
      private name: string,
      private team: string,
      public realName?: string,
      // avgAge: number = 43,
    ) {

      // Avenger.avgAge = avgAge;

      // this.name = name;
      // this.team = team;
      // this.realName = realName;
    }

    public bio(): string {
      return `${ this.name } ${ this.team }`
    }

  }

  // const acman: Avenger = new Avenger( 'HOla', 'cap', 'jjjj');

  // console.log( acman );

  // console.log( Avenger.getAveAge());

})()