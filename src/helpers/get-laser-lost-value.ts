import { Point } from "../types";
import { getDistanceBetweenTwoPoints } from "./get-distance-between-two-points";

interface GetLaserLostValueInput {
  laserStartHitPoint: Point;
  laserEndHitPoint: Point;
  density: number;
}

export const getLaserLostValue = ({
  laserStartHitPoint,
  laserEndHitPoint,
  density,
}: GetLaserLostValueInput) => {
  const distanceBetweenTwoPoints = getDistanceBetweenTwoPoints(
    laserStartHitPoint,
    laserEndHitPoint
  );

  return distanceBetweenTwoPoints * density;
};
