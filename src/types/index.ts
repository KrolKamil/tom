export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: number;
  stop: number;
}

export interface Scope {
  x: Line;
  y: Line;
}

export interface Field extends Scope {
  index: number;
}

export interface Cake extends Scope {
  density: number;
}
