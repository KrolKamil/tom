import { Point, Scope } from "../types";

const isPointInTheCake = (cake: Scope, point: Point) =>
  point.x >= cake.x.start &&
  point.x <= cake.x.stop &&
  point.y >= cake.y.start &&
  point.y <= cake.y.stop;

export const makeGetScopeThatContainsPoint =
  <T extends Scope>(scopes: T[]) =>
  (point: Point) => {
    for (let i = 0; i < scopes.length; i++) {
      if (isPointInTheCake(scopes[i], point)) {
        return scopes[i];
      }
    }
  };
