import { makeGetScopeThatContainsPoint } from "./helpers/make-get-cake-that-contains-point";
import { Cake, Field, Point } from "./types";

interface Input {
  n: number;
  result: number[];
  fields: Field[];
  cakes: Cake[];
}

export const calculateAbsoluteErrors = ({
  n,
  fields,
  result,
  cakes,
}: Input) => {
  const out: number[] = [];
  const getCakeThatContainsPoint = makeGetScopeThatContainsPoint(cakes);

  const shiftX = Math.abs(fields[0].x.start - fields[0].x.stop) / 2;
  const shiftY = Math.abs(fields[0].y.start - fields[0].y.stop) / 2;

  for (let i = 0; i < n * n; i++) {
    const point: Point = {
      x: fields[i].x.start + shiftX,
      y: fields[i].y.start + shiftY,
    };

    const cake = getCakeThatContainsPoint(point);

    if (cake) {
      out.push(cake.density);
    } else {
      out.push(0);
    }
  }

  return {
    real: out,
    error: out.map((value, index) => {
      return Math.abs(value - result[index]);
    }),
  };
};
