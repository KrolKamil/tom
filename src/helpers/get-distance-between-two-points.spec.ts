import { Point } from "../types";
import { getDistanceBetweenTwoPoints } from "./get-distance-between-two-points";

describe("getDistanceBetweenTwoPoints", () => {
  it("should calculate distance between two points", () => {
    const pointA: Point = {
      x: 0,
      y: 0,
    };

    const pointB: Point = {
      x: 1,
      y: 0,
    };

    const distance = getDistanceBetweenTwoPoints(pointA, pointB);
    expect(distance).toEqual(1);
  });
});
