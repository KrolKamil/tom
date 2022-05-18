import { Cake, Point } from "./types";
import { LasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { makeGetPointThatIsBetweenTwoPoints } from "./helpers/make-get-point-that-is-between-two-points";
import { makeGetScopeThatContainsPoint } from "./helpers/make-get-cake-that-contains-point";
import { getLaserLostValue } from "./helpers/get-laser-lost-value";

interface CalculateCakesInput {
  cakes: Cake[];
  tList: number[];
  lasersAndReceivers: LasersAndReceivers;
}

export const calculateCakes = ({
  lasersAndReceivers,
  cakes,
  tList,
}: CalculateCakesInput) => {
  const output: number[][] = [];

  const getCakeThatContainsPoint = makeGetScopeThatContainsPoint(cakes);

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
                density: densityOfSomethingThatLaserHit!,
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

      output[i][j] = laserValueLost;
    }
  }

  return output;
};
