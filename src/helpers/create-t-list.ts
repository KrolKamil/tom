export const createTList = (count: number) => {
  const space = 1 / count;
  const tList: number[] = [];
  let currentPosition = 0;

  tList.push(currentPosition);

  for (let i = 0; i < count; i++) {
    currentPosition = currentPosition + space;
    tList.push(currentPosition);
  }

  return tList;
};
