import { Point } from "../types";

export const getDistanceBetweenTwoPoints = (pointA: Point, pointB: Point) =>
  Math.sqrt(
    Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)
  );
