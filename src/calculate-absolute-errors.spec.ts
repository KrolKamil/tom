import { calculateAbsoluteErrors } from "./calculate-absolute-errors";
import { calculateAbsoluteErrorsExpected } from "./expected/calculate-absolute-errors.expected";
import { cakes } from "./datasets/dataset-2";
import { calculateResultExpected } from "./expected/calculate-result.expected";
import { generateFields } from "./helpers/generate-fields";

describe("calculateAbsoluteErrors", () => {
  const n = 20;
  const fields = generateFields(n);

  it("should calculate cakes", () => {
    const calculatedAbsoluteErrors = calculateAbsoluteErrors({
      n,
      fields,
      result: calculateResultExpected.result,
      cakes,
    });

    expect(calculatedAbsoluteErrors).toEqual(calculateAbsoluteErrorsExpected);
  });
});
