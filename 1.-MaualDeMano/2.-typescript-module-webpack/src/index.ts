import { getPokemont } from './generics/get-pokemon';

getPokemont(1)
  .then( pokemon => console.log( pokemon.sprites.front_default))
  .catch( err => console.log(err))
  .finally( () => console.log('fin de promesa'))
  