import { getVectorLength } from "./get-vector-length";

describe("getVectorLength", () => {
  it("should return vector length", () => {
    const expected = 3;
    const vector = [2, 2, 1];

    const vectorLength = getVectorLength(vector);

    expect(vectorLength).toEqual(expected);
  });
});
