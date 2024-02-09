export const generateId = () => {
  var S4 = () => {
    return ((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
};

export const snakeCaseToNormalCase = (snakeCaseString: string) => {
  const normalizedCase = snakeCaseString
    .split('_')
    .map(word => {
      if (word === 'homeworld') {
        return 'Home World';
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  return normalizedCase;
};
