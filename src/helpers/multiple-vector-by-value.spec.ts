import { multipleVectorByValue } from "./multiple-vector-by-value";

describe("multipleVectorByValue", () => {
  it("should return vector length", () => {
    const expected = [2, 4, 6];
    const value = 2;
    const vector = [1, 2, 3];

    const newVector = multipleVectorByValue(vector, value);

    expect(newVector).toEqual(expected);
  });
});
