export const mapResultToArray = (
  target: { fieldId: number; value: number }[][][],
  n: number
) => {
  const sums: number[] = [];
  for (let i = 0; i < n * n; i++) {
    sums.push(0);
  }

  target.forEach((result) => {
    result.forEach((r) => {
      r.forEach((v) => (sums[v.fieldId - 1] += v.value));
    });
  });

  let orderedResult: number[][] = [];
  orderedResult.push([]);

  for (let i = 0; i < n * n; i++) {
    if ((i + 1) % n === 0) {
      orderedResult.push([]);
    }

    orderedResult[orderedResult.length - 1].push(sums[i]);
  }

  orderedResult.pop();

  orderedResult[0].push(0);

  // return orderedResult.map((r) => r.reverse()).reverse();
  return orderedResult.reverse();
};
