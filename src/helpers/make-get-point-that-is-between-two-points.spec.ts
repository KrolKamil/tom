import { Point } from "../types";
import { getDistanceBetweenTwoPoints } from "./get-distance-between-two-points";
import { makeGetPointThatIsBetweenTwoPoints } from "./make-get-point-that-is-between-two-points";

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

    const expected: Point = { x: 0.5, y: 0 };

    const getPointThatIsBetweenTwoPoints = makeGetPointThatIsBetweenTwoPoints(
      pointA,
      pointB
    );

    const point = getPointThatIsBetweenTwoPoints(0.5);

    expect(point).toEqual(expected);
  });
});
