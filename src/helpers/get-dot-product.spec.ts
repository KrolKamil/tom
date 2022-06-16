import { Point } from "../types";
import { getDotProduct } from "./get-dot-product";
import { getLaserLostValue } from "./get-laser-lost-value";

describe("getDotProduct", () => {
  it("should return dot product", () => {
    const vector = [
      {
        fieldId: 1,
        distance: 1,
      },
      {
        fieldId: 1,
        distance: 2,
      },
    ];

    const b = [1, 2];

    const dotProduct = getDotProduct({
      vector,
      b,
    });

    expect(dotProduct).toEqual(6);
  });
});
