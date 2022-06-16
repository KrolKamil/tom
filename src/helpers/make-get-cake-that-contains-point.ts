import { Point, Scope } from "../types";
import { isPointInTheCake } from "./is-point-in-the-cake";

export const makeGetScopeThatContainsPoint =
  <T extends Scope>(scopes: T[]) =>
  (point: Point) => {
    for (let i = 0; i < scopes.length; i++) {
      if (isPointInTheCake(scopes[i], point)) {
        return scopes[i];
      }
    }
  };
