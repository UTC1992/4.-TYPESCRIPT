// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Payaso {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Payaso = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Payaso ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad {
  ( arr: string[]): number;
}

const ciudadGotica: Ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person {
  name: string;
  age: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements Person {
  public name: string;
  public age: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio() {
    console.log('hola mundooo');
  }
}