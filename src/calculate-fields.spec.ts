import { createLasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { createTList } from "./helpers/create-t-list";
import { calculateFields } from "./calculate-fields";
import { generateFields } from "./helpers/generate-fields";
import { calculateFieldsExpected } from "./expected/calculate-fields.expected";

describe("calculateFields", () => {
  const countLasers = 24;
  const countT = 100;
  const n = 20;

  const tList = createTList(countT);
  const lasersAndReceivers = createLasersAndReceivers(countLasers);
  const fields = generateFields(n);

  it("should calculate fields", () => {
    const calculatedFields = calculateFields({
      lasersAndReceivers,
      tList,
      fields,
    });

    expect(calculatedFields).toEqual(calculateFieldsExpected);
  });
});
