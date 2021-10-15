(() => {

  const fullName = ( firstName: string, lastName?: string ): string => {
    return `${firstName} ${lastName || 'no hay apellido'}`;
  }

  const name = fullName('tony')

  console.log({ name })

})()