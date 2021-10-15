(() => {

  const batman: string = 'Batman';  
  const linternaVerde: string = "Linterna'n verde";
  const volcanNegro: string = `Héroe 'volcan' negro`;

  console.log( `I'm ${batman}`);
  console.log( batman.toUpperCase());

  console.log( batman[10]?.toUpperCase() || 'No existe el caracter');

})()