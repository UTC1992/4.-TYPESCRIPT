(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    power: number;
  }

  const avengers: Avengers = {
    nick: 'Samul L jacson',
    ironman: 'toni estar',
    vision: 'paul betanny',
    activos: true,
    power: 1500,
  }

  // const { power, activos } = avengers;
  // console.log( power, activos );

  const printAvengers = ( { ironman, ...rest }: Avengers) => {
    console.log(ironman, rest);
  }

  // printAvengers(avengers);

  const avengersArr: [string, string, boolean] = ['capitan', 'hulk', true];

  const [ , , ironman ] = avengersArr;
  console.log({ ironman });

})()