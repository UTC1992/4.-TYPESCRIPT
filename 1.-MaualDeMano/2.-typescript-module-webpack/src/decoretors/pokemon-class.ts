
function printToConsole( constructor: Function ) {
  console.log( constructor );
}

const printToConsoleConditional = ( print: boolean = false ): Function => {

  if ( print ) {
    return printToConsole;
  } else {
    return () => {}
  }
}

const bloquearPrototipo = function( constructor: Function ) {
  Object.seal( constructor );
  Object.seal( constructor.prototype );
}

function CheckValidatePokemonId() {
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    // descriptor.value = () => console.log('hola mundo Bo como esta estoy super bien ')
    const originalMethod = descriptor.value;
    descriptor.value = ( id: number  ) => {
      if ( id < 1 || id > 800 ) {
        return console.log('Error el id debe estar entre 1 y 800')
      } else {
        return originalMethod( id );
      }
    }
  }
}

function readOnly( isWritable: boolean = true ): Function {
  return function( target: any, propertyKey: string ) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log( this )
        return 'Omar';
      },
      set( this, val ) {
        // console.log( this, value)
        Object.defineProperty( this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false, 
        })
      }
    }; 
    return descriptor;
  }
}

@bloquearPrototipo
@printToConsoleConditional( true )
class Pokemon {

  @readOnly( false )
  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string,
  ) {}

  @CheckValidatePokemonId()
  savePokemonToDb( id: number ) {
    console.log(`pokemon guardado en la base de datos ${id}`)
  }
}

export default Pokemon;