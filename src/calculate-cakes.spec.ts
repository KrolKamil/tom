import { cakes } from "./datasets/dataset-2";
import { calculateCakes } from "./calculate-cakes";
import { createLasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { createTList } from "./helpers/create-t-list";
import { calculateCakesExpected } from "./expected/calculate-cakes.expected";

describe("calculateCakes", () => {
  const countLasers = 24;
  const countT = 100;

  const tList = createTList(countT);
  const lasersAndReceivers = createLasersAndReceivers(countLasers);

  it("should calculate cakes", () => {
    const calculatedCakes = calculateCakes({
      lasersAndReceivers,
      cakes,
      tList,
    });

    expect(calculatedCakes).toEqual(calculateCakesExpected);
  });
});
