(() => {

  const hero: string = 'flash';

  function returnName(): string {
    return hero;
  }

  const activatedBatiSignal = (): string => {
    return 'Batiseñal activada';
  }

  const res: string = returnName();

  console.log( typeof activatedBatiSignal);

})()