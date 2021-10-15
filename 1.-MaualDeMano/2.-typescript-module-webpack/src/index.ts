import Pokemon from './decoretors/pokemon-class';

const charmander = new Pokemon('charmander');

//(Pokemon.prototype as any).customName = 'hola';

charmander.publicApi = 'holaaaa';
 console.log( charmander );
