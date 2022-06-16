import { createLasersAndReceivers } from "./create-lasers-and-receivers";

describe("createLasersAndReceivers", () => {
  const expected = {
    lasers: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
    ],
    receivers: [
      { x: -1, y: 1 },
      { x: 1, y: 1 },
    ],
  };

  it("should create lasers and receivers", () => {
    const lasersAndReceivers = createLasersAndReceivers(2);

    expect(lasersAndReceivers).toEqual(expected);
  });
});
