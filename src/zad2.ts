import { writeFile } from "fs";
import { Field, Point } from "./types";
import { createLasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { makeGetPointThatIsBetweenTwoPoints } from "./helpers/make-get-point-that-is-between-two-points";
import { makeGetScopeThatContainsPoint } from "./helpers/make-get-cake-that-contains-point";
import { createTList } from "./helpers/create-t-list";
import { generateFields } from "./helpers/generate-fields";
import { getDistanceBetweenTwoPoints } from "./helpers/get-distance-between-two-points";

const output: { fieldId: number; distance: number }[][][] = [];

// configurable
const countLasers = 10;
const countT = 1000; // higher T => more points on the line
const n = 7;
// end configurable

const tList = createTList(countT);
const fields = generateFields(n);
const lasersAndReceivers = createLasersAndReceivers(countLasers);

console.log(fields);
console.log(lasersAndReceivers);

const getFieldThatContainsPoint = makeGetScopeThatContainsPoint(fields);

for (let i = 0; i < lasersAndReceivers.lasers.length; i++) {
  output.push([]);

  for (let j = 0; j < lasersAndReceivers.lasers.length; j++) {
    output[i].push([]);
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
writeFile("zad2.json", JSON.stringify(output, null, 4), (err) => {
  console.log(err);
});
