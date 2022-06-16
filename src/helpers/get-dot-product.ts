interface GetDotProductInput {
  vector: {
    fieldId: number;
    distance: number;
  }[];
  b: number[];
}

export const getDotProduct = ({ vector, b }: GetDotProductInput) => {
  let result = 0;
  const biggerArray = vector.length >= b.length ? vector : b;

  for (let i = 0; i < biggerArray.length; i++) {
    const index = vector[i]?.fieldId || -1;
    const aa = vector[i]?.distance || 0;
    const bb = b[index] || 0;

    result = aa * bb + result;
  }

  return result;
};
