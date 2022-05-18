import { Cake } from "../types";

const cakeA: Cake = {
  x: { start: -0.7, stop: -0.4 },
  y: { start: -0.5, stop: 0.2 },
  density: 1,
};

const cakeB: Cake = {
  x: { start: -0.2, stop: 0.2 },
  y: { start: -0.1, stop: 0.1 },
  density: 2,
};

const cakeC: Cake = {
  x: { start: -0.2, stop: 0.2 },
  y: { start: 0.3, stop: 0.5 },
  density: 3,
};

const cakeD: Cake = {
  x: { start: 0.4, stop: 0.7 },
  y: { start: 0.4, stop: 0.7 },
  density: 4,
};

export const cakes = [cakeA, cakeB, cakeC, cakeD];
