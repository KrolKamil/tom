import { Point } from "../types";

export const makeGetPointThatIsBetweenTwoPoints =
  (a: Point, b: Point) => (t: number) => ({
    x: a.x + t * (b.x - a.x),
    y: a.y + t * (b.y - a.y),
  });
