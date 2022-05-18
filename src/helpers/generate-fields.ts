import { Field } from "../types";

export const generateFields = (n: number) => {
  const space = 2 / n;

  const baseField: Field = {
    x: {
      start: -1,
      stop: -1 + space,
    },
    y: {
      start: 1 - space,
      stop: 1,
    },
    index: 0,
  };

  const fields: Field[] = [];

  let index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      index++;
      const field: Field = {
        x: {
          start: baseField.x.start + space * j,
          stop: baseField.x.stop + space * j,
        },
        y: {
          start: baseField.y.start - space * i,
          stop: baseField.y.stop - space * i,
        },
        index,
      };

      fields.push(field);
    }
  }

  return fields;
};
