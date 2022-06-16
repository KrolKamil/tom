import { Point, Scope } from "../types";

export const isPointInTheCake = (cake: Scope, point: Point) =>
  point.x >= cake.x.start &&
  point.x <= cake.x.stop &&
  point.y >= cake.y.start &&
  point.y <= cake.y.stop;
