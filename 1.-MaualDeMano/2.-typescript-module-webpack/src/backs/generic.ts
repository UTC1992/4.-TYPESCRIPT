import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain } from '../interfaces';

// printObject( 1234 );
// printObject( new Date());
// printObject({ a: 1 });
// printObject('hola mundo');

// console.log(genericFunction(233.44444).toFixed(2));
// console.log(genericFunctionArrow('HOla mundo').toUpperCase());

const deadpool = {
  name: 'Deadpool',
  realName: 'Hola',
  dangerLevel: 23,
}

console.log(genericFunctionArrow<Villain>( deadpool ));
