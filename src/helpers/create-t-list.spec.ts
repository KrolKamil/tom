import { createTList } from "./create-t-list";

describe("createTList", () => {
  const expected = [0, 0.25, 0.5, 0.75, 1];

  it("should create t list", () => {
    const tList = createTList(4);

    expect(tList).toEqual(expected);
  });
});
