(() => {

  const sumar = ( a: number, b: number ): number => {
    return a + b;
  }

  const contar = (heroes: string[]): number => {
    return heroes.length;
  }

  const superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna verde'];
  contar( superHeroes );

  const llamarBatman = ( llamar: boolean = true): void => {
    if ( llamar ) {
      console.log('Batiseñal activada');
    }
  }

  llamarBatman();

  const unirHerores = ( ...personas: string[]): string => {
    return personas.join(', ');
  } 

  const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[]): void => {}

  let noHaceNadaTampoco: ( x: number, y: string, z: boolean, w: string[]) => void;
  noHaceNadaTampoco = noHaceNada;

})()
  
  