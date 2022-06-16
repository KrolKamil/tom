import { generateFields } from "./generate-fields";

describe("generateFields", () => {
  const expected = [
    { x: { start: -1, stop: 0 }, y: { start: 0, stop: 1 }, index: 1 },
    { x: { start: 0, stop: 1 }, y: { start: 0, stop: 1 }, index: 2 },
    { x: { start: -1, stop: 0 }, y: { start: -1, stop: 0 }, index: 3 },
    { x: { start: 0, stop: 1 }, y: { start: -1, stop: 0 }, index: 4 },
  ];

  it("should generate fields", () => {
    const fields = generateFields(2);

    expect(fields).toEqual(expected);
  });
});
