interface CalculateResultInput {
  matrixA: { fieldId: number; distance: number }[][][]; // zad2
  matrixB: number[][]; // zad1
  iterations: number;
  n: number;
}

const getDotProduct = (
  matriAVector: {
    fieldId: number;
    distance: number;
  }[],
  b: number[]
) => {
  let result = 0;
  const biggerArray = matriAVector.length >= b.length ? matriAVector : b;

  for (let i = 0; i < biggerArray.length; i++) {
    const index = matriAVector[i]?.fieldId || -1;
    const aa = matriAVector[i]?.distance || 0;
    const bb = b[index] || 0;

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

export const calculateResult = ({
  matrixA,
  matrixB,
  iterations,
  n,
}: CalculateResultInput) => {
  let current: number[] = [];
  let next: number[] = [];

  for (let i = 1; i < n * n + 1; i++) {
    current[i] = 0;
    next[i] = 0;
  }

  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < matrixB.length; i++) {
      for (let j = 0; j < matrixB[i].length; j++) {
        const pi = matrixB[i][j];
        const ai = matrixA[i][j].map((value) => value.distance);

        const aiXDotProduct = getDotProduct(matrixA[i][j], current);
        const aiLength = getVectorLength(ai);

        const numerator = pi - aiXDotProduct;
        const denominator = aiLength * aiLength;

        const quotient = numerator / denominator;

        const multpied = multipleVectorByValue(ai, quotient);

        for (let n = 0; n < matrixA[i][j].length; n++) {
          const index = matrixA[i][j][n].fieldId;

          if ((current[index] || 0) + multpied[n] > 0) {
            next[index] = (current[index] || 0) + multpied[n];
          }
        }

        current = next;
      }
    }
  }

  current.shift();

  return {
    n,
    result: current,
  };
};
