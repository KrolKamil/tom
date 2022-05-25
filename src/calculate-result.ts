interface CalculateResultInput {
  matrixA: { fieldId: number; distance: number }[][][]; // zad2
  matrixB: number[][]; // zad1
  iterations: number;
}

const getDotProduct = (a: number[], b: number[]) => {
  let result = 0;
  const biggerArray = a.length >= b.length ? a : b;

  for (let i = 0; i < biggerArray.length; i++) {
    const aa = a[i] || 0;
    const bb = b[i] || 0;

    result = aa * bb + result;
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
    const aa = a[i] || 0;
    const bb = b[i] || 0;

    result.push(aa + bb);
  }

  return result;
};

export const calculateResult = ({
  matrixA,
  matrixB,
  iterations,
}: CalculateResultInput) => {
  const output: { value: number; fieldId: number }[][][] = [];

  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < matrixB.length; i++) {
      if (k === 0) {
        output.push([]);
      }

      for (let j = 0; j < matrixB[i].length; j++) {
        const xk: number[] = output[i][j]?.map((x) => x.value) || [];

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

        output[i][j] = result.map((e, index) => ({
          value: e,
          fieldId: matrixA[i][j][index]?.fieldId,
        }));
      }
    }
  }

  return output;
};
