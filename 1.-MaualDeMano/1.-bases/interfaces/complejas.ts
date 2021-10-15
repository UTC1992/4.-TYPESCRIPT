(() => {

  // en las interfaces las secundarias van abajo
  interface Client {
    name: string;
    age?: number;
    address: Address;
    // es recomendado que cuando se desea implementar metodos
    // se cree una clase en lugar de una interfaz
    getFullAdress( id: string): string; 
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const client: Client = {
    name: 'omar',
    age: 28,
    address: {
      id: 24,
      zip: 0909,
      city: 'quito',
    },
    getFullAdress() {
      return this.address.city;
    }
  }

  const client2: Client = {
    name: 'juan',
    age: 29,
    address: {
      id: 24,
      zip: 0909,
      city: 'cuenca',
    },
    getFullAdress() {
      return this.address.city;
    }
  }


})()