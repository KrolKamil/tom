import { Point } from "../types";

export const createLasersAndReceivers = (countElements: number) => {
  const positions: number[] = [];
  const spaceBetweenElements = (100 / (countElements - 1)) * 0.01 * 2;

  let currentPossition = -1;

  positions.push(currentPossition);

  for (let i = 1; i < countElements; i++) {
    currentPossition = currentPossition + spaceBetweenElements;

    positions.push(currentPossition);
  }

  const lasers: Point[] = positions.map((position) => ({
    x: position,
    y: -1,
  }));

  const receivers: Point[] = positions.map((position) => ({
    x: position,
    y: 1,
  }));

  return {
    lasers,
    receivers,
  };
};
