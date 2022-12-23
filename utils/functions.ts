const splitArray = <T>(array: T[], size: number): T[][] => {
  if (!array.length) {
    return [];
  }

  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...splitArray(tail, size)];
};

export default splitArray;
