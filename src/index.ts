import { Point } from "./types";
import { createLasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { makeGetPointThatIsBetweenTwoPoints } from "./helpers/make-get-point-that-is-between-two-points";
import { makeGetCakeThatContainsPoint } from "./helpers/make-get-cake-that-contains-point";
import { getLaserLostValue } from "./helpers/get-laser-lost-value";
import { createTList } from "./helpers/create-t-list";
import { cakes } from "./dataset";

const output: number[][] = [];

// configurable
const countLasers = 5;
const countT = 1000; // higher T => more points on the line
// end configurable

const tList = createTList(countT);
const lasersAndReceivers = createLasersAndReceivers(countLasers);

const getCakeThatContainsPoint = makeGetCakeThatContainsPoint(cakes);

for (let i = 0; i < lasersAndReceivers.lasers.length; i++) {
  output.push([]);

  for (let j = 0; j < lasersAndReceivers.lasers.length; j++) {
    const getPointThatIsBetweenTwoPoints = makeGetPointThatIsBetweenTwoPoints(
      lasersAndReceivers.lasers[i],
      lasersAndReceivers.receivers[j]
    );

    const pointsOnTheLaser = tList.map((t) =>
      getPointThatIsBetweenTwoPoints(t)
    );

    let laserValueLost = 0;
    let startPointWhereLaserHitSomething: Point | undefined = undefined;
    let densityOfSomethingThatLaserHit: number | undefined = undefined;

    for (let k = 0; k < pointsOnTheLaser.length; k++) {
      const cake = getCakeThatContainsPoint(pointsOnTheLaser[k]);

      if (cake) {
        if (startPointWhereLaserHitSomething === undefined) {
          startPointWhereLaserHitSomething = pointsOnTheLaser[k];
          densityOfSomethingThatLaserHit = cake.density;
        } else if (densityOfSomethingThatLaserHit !== cake.density) {
          laserValueLost =
            laserValueLost +
            getLaserLostValue({
              laserStartHitPoint: startPointWhereLaserHitSomething,
              laserEndHitPoint: pointsOnTheLaser[k],
              density: cake.density,
            });

          startPointWhereLaserHitSomething = pointsOnTheLaser[k];
          densityOfSomethingThatLaserHit = cake.density;
        }
      } else if (
        startPointWhereLaserHitSomething &&
        densityOfSomethingThatLaserHit
      ) {
        laserValueLost =
          laserValueLost +
          getLaserLostValue({
            laserStartHitPoint: startPointWhereLaserHitSomething,
            laserEndHitPoint: pointsOnTheLaser[k],
            density: densityOfSomethingThatLaserHit,
          });

        startPointWhereLaserHitSomething = undefined;
        densityOfSomethingThatLaserHit = undefined;
      }
    }

    if (startPointWhereLaserHitSomething && densityOfSomethingThatLaserHit) {
      laserValueLost =
        laserValueLost +
        getLaserLostValue({
          laserStartHitPoint: startPointWhereLaserHitSomething,
          laserEndHitPoint: pointsOnTheLaser[pointsOnTheLaser.length - 1],
          density: densityOfSomethingThatLaserHit,
        });
    }

    output[i][j] = laserValueLost;
  }
}

console.log(output);
