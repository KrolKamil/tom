import { calculateCakesExpected } from "./expected/calculate-cakes.expected";
import { calculateResultExpected } from "./expected/calculate-result.expected";
import { calculateResult } from "./calculate-result";
import { calculateFieldsExpected } from "./expected/calculate-fields.expected";

describe("calculateResult", () => {
  const iterations = 200;
  const n = 20;

  it("should calculate result", () => {
    const calculatedResult = calculateResult({
      matrixA: calculateFieldsExpected,
      matrixB: calculateCakesExpected,
      iterations,
      n,
    });

    expect(calculatedResult).toEqual(calculateResultExpected);
  });
});
