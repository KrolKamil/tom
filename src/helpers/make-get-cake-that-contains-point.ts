import { Cake, Point } from "../types";

const isPointInTheCake = (cake: Cake, point: Point) =>
  point.x >= cake.x.start &&
  point.x <= cake.x.stop &&
  point.y >= cake.y.start &&
  point.y <= cake.y.stop;

export const makeGetCakeThatContainsPoint =
  (cakes: Cake[]) => (point: Point) => {
    for (let i = 0; i < cakes.length; i++) {
      if (isPointInTheCake(cakes[i], point)) {
        return cakes[i];
      }
    }
  };
