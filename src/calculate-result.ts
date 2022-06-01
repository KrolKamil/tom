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
  n,
}: CalculateResultInput) => {
  let current: number[] = [];
  let next: number[] = [];

  for (let aa = 0; aa < n * n; aa++) {
    current[aa] = 0;
    next[aa] = 0;
  }

  console.log(current.length);

  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < matrixB.length; i++) {
      for (let j = 0; j < matrixB[i].length; j++) {
        const pi = matrixB[i][j];
        const ai = matrixA[i][j].map((value) => value.distance);
        const aiXDotProduct = getDotProduct(matrixA[i][j], current);
        const aiLength = getVectorLength(ai);

        const numerator = pi - aiXDotProduct;
        const denominator = aiLength * aiLength;

        const myConst = numerator / denominator;

        const multpied = multipleVectorByValue(ai, myConst);

        // matrixA[i][j] = matrixA[i][j].map((value, index) => {
        //   return {
        //     fieldId: matrixA[i][j][index].fieldId,
        //     distance: multpied[index],
        //   };
        // });

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

  return JSON.parse(JSON.stringify(current)).map((value: any) =>
    value ? value : 0
  );
};
