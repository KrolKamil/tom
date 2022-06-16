export const getVectorLength = (target: number[]) => {
  let result = 0;

  for (let i = 0; i < target.length; i++) {
    result = result + target[i] * target[i];
  }

  return Math.sqrt(result);
};
