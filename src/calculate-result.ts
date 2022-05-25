interface CalculateResultInput {
  matrixA: { fieldId: number; distance: number }[][][]; // zad2
  matrixB: number[][]; // zad1
}

const getDotProduct = (a: number[], b: number[]) => {
  let result = 0;
  const biggerArray = a.length >= b.length ? a : b;

  for (let i = 0; i < biggerArray.length; i++) {
    result = result + (a[i] || 0) * (b[i] || 0);
  }

  return result;
};

const getVectorLength = (target: number[]) => {
  let result = 0;

  for (let i = 0; i < target.length; i++) {
    result = result + target[i] * target[i];
  }

  return Math.sqrt(result);
};

const multipleVectorByValue = (target: number[], value: number) =>
  target.map((element) => element * value);

const addVectors = (a: number[], b: number[]) => {
  const result: number[] = [];
  const biggerArray = a.length >= b.length ? a : b;

  for (let i = 0; i < biggerArray.length; i++) {
    result.push((a[i] || 0) + (b[i] || 0));
  }

  return result;
};

export const calculateResult = ({ matrixA, matrixB }: CalculateResultInput) => {
  const output: { value: number; fieldId: number }[][][] = [];

  let xk: number[] = [];

  for (let i = 0; i < matrixB.length; i++) {
    output.push([]);

    for (let j = 0; j < matrixB[i].length; j++) {
      const pi = matrixB[i][j];
      const ai = matrixA[i][j].map((value) => value.distance);
      const aiXDotProduct = getDotProduct(ai, xk);
      const aiLength = getVectorLength(ai);

      const numerator = pi - aiXDotProduct;
      const denominator = aiLength * aiLength;

      const result = addVectors(
        xk,
        multipleVectorByValue(ai, numerator / denominator)
      ).map((element) => (element < 0 ? 0 : element));

      xk = result;
      output[i].push(
        result.map((e, index) => ({
          value: e,
          fieldId: matrixA[i][j][index]?.fieldId,
        }))
      );
    }

    xk = [];
  }

  return output;
};
