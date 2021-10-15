(() => {

  const fullName = ( firstName: string, ...restArgs: string[] ): string => {
    
    return `${firstName} ${restArgs.join(' ')}`;
  }

  const superMan = fullName( 'clark', 'josep', 'superman');

  console.log({ superMan });

})()