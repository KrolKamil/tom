export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: number;
  stop: number;
}

export interface Cake {
  x: Line;
  y: Line;
  density: number;
}
