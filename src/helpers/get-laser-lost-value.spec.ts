import { Point } from "../types";
import { getLaserLostValue } from "./get-laser-lost-value";

describe("getLaserLostValue", () => {
  it("should calculate laser lost value", () => {
    const density = 5;
    const laserEndHitPoint: Point = {
      x: 0,
      y: 0,
    };

    const laserStartHitPoint: Point = {
      x: 1,
      y: 0,
    };

    const lostValue = getLaserLostValue({
      density,
      laserEndHitPoint,
      laserStartHitPoint,
    });

    expect(lostValue).toEqual(5);
  });
});
