(() => {

  type Avenger = {
    name: string;
    weapon: string;
  }

  const ironman: Avenger = {
    name: 'tony start',
    weapon: 'armor',
  }

  const captainAmerica: Avenger = {
    name: 'cap america',
    weapon: 'escudo',
  }
  
  const spiderman: Avenger = {
    name: 'spiderman',
    weapon: 'tela araña',
  }

  const avengers: Avenger[] = [ ironman, captainAmerica, spiderman ];

  for ( const avenger of avengers ) {
    console.log( avenger.name );
  }


})()