import { Point, Scope } from "../types";
import { makeGetScopeThatContainsPoint } from "./make-get-cake-that-contains-point";

describe("makeGetScopeThatContainsPoint", () => {
  it("should return scope if a point is inside of it", () => {
    const scopeA: Scope = {
      x: {
        start: 0,
        stop: 1,
      },
      y: {
        start: 0,
        stop: 1,
      },
    };

    const scopeB: Scope = {
      x: {
        start: 2,
        stop: 3,
      },
      y: {
        start: 2,
        stop: 3,
      },
    };

    const point: Point = {
      x: 0.5,
      y: 0.5,
    };

    const scopes = [scopeA, scopeB];

    const getScopeThatContainsPoint = makeGetScopeThatContainsPoint(scopes);
    const scope = getScopeThatContainsPoint(point);

    expect(scope).toEqual(scopeA);
  });

  it("should return undefined if a point is not inside of any scope", () => {
    const scopeA: Scope = {
      x: {
        start: 0,
        stop: 1,
      },
      y: {
        start: 0,
        stop: 1,
      },
    };

    const scopeB: Scope = {
      x: {
        start: 2,
        stop: 3,
      },
      y: {
        start: 2,
        stop: 3,
      },
    };

    const point: Point = {
      x: 9,
      y: 9,
    };

    const scopes = [scopeA, scopeB];

    const getScopeThatContainsPoint = makeGetScopeThatContainsPoint(scopes);
    const scope = getScopeThatContainsPoint(point);

    expect(scope).toEqual(undefined);
  });
});
