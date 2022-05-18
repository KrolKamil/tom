import { Field, Point } from "./types";
import { LasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { makeGetPointThatIsBetweenTwoPoints } from "./helpers/make-get-point-that-is-between-two-points";
import { makeGetScopeThatContainsPoint } from "./helpers/make-get-cake-that-contains-point";
import { getDistanceBetweenTwoPoints } from "./helpers/get-distance-between-two-points";

interface CalculateFieldsInput {
  fields: Field[];
  tList: number[];
  lasersAndReceivers: LasersAndReceivers;
}

export const calculateFields = ({
  fields,
  tList,
  lasersAndReceivers,
}: CalculateFieldsInput) => {
  const output: { fieldId: number; distance: number }[][][] = [];

  const getFieldThatContainsPoint = makeGetScopeThatContainsPoint(fields);

  for (let i = 0; i < lasersAndReceivers.lasers.length; i++) {
    output.push([]);

    for (let j = 0; j < lasersAndReceivers.lasers.length; j++) {
      output[i].push([]);

      if (
        (i === 0 && j === 0) ||
        (i === lasersAndReceivers.lasers.length - 1 &&
          j === lasersAndReceivers.lasers.length - 1)
      ) {
        continue;
      }

      const getPointThatIsBetweenTwoPoints = makeGetPointThatIsBetweenTwoPoints(
        lasersAndReceivers.lasers[i],
        lasersAndReceivers.receivers[j]
      );

      const pointsOnTheLaser = tList.map((t) =>
        getPointThatIsBetweenTwoPoints(t)
      );

      let startPoint: Point | undefined = undefined;
      let currentField: Field | undefined = undefined;

      for (let k = 0; k < pointsOnTheLaser.length; k++) {
        const field = getFieldThatContainsPoint(pointsOnTheLaser[k]);

        if (field) {
          if (currentField === undefined) {
            currentField = field;
            startPoint = pointsOnTheLaser[k];
          } else {
            if (currentField !== field) {
              const distance = getDistanceBetweenTwoPoints(
                startPoint!,
                pointsOnTheLaser[k]
              );

              output[i][j].push({
                fieldId: currentField.index,
                distance,
              });

              currentField = field;
              startPoint = pointsOnTheLaser[k];
            }
          }
        }
      }

      const distance = getDistanceBetweenTwoPoints(
        startPoint!,
        pointsOnTheLaser[pointsOnTheLaser.length - 1]
      );

      output[i][j].push({
        fieldId: currentField!.index,
        distance,
      });
    }
  }

  return output;
};
