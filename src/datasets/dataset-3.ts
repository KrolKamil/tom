import { Cake } from "../types";

const cakeA: Cake = {
  x: { start: -0.4, stop: -0.2 },
  y: { start: -0.5, stop: 0.5 },
  density: 1,
};

const cakeB: Cake = {
  x: { start: -0.2, stop: 0.2 },
  y: { start: 0.3, stop: 0.5 },
  density: 1,
};

const cakeC: Cake = {
  x: { start: -0.2, stop: 0.2 },
  y: { start: -0.1, stop: 0.1 },
  density: 1,
};

const cakeD: Cake = {
  x: { start: 0, stop: 0.2 },
  y: { start: 0.1, stop: 0.3 },
  density: 1,
};

const cakeE: Cake = {
  x: { start: 0.6, stop: 0.8 },
  y: { start: -0.8, stop: -0.6 },
  density: 1,
};

export const cakes = [cakeA, cakeB, cakeC, cakeD, cakeE];
