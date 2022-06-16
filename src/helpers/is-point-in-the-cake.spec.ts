import { Cake, Point, Scope } from "../types";
import { isPointInTheCake } from "./is-point-in-the-cake";

describe("isPointInTheCake", () => {
  it("should return true if point is in the cake", () => {
    const point: Point = {
      x: 0.5,
      y: 0.5,
    };
    const cake: Cake = {
      x: {
        start: 0,
        stop: 1,
      },
      y: {
        start: 0,
        stop: 1,
      },
      density: 5,
    };

    const result = isPointInTheCake(cake, point);

    expect(result).toEqual(true);
  });

  it("should return false if point is not in the cake", () => {
    const point: Point = {
      x: 2.5,
      y: 2.5,
    };
    const cake: Cake = {
      x: {
        start: 0,
        stop: 1,
      },
      y: {
        start: 0,
        stop: 1,
      },
      density: 5,
    };

    const result = isPointInTheCake(cake, point);

    expect(result).toEqual(false);
  });
});
