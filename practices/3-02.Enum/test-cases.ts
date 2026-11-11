import type { Equal, Expect } from "#helpers/type-test.js";
import {
  Direction,
  Size,
  formatDirection,
  moveDirection,
  printSize,
  productSize,
} from "./template.js";

type cases = [
  Expect<Equal<keyof typeof Size, "S" | "M" | "L" | "XL">>,
  Expect<Equal<typeof productSize, Size>>,
  Expect<Equal<typeof printSize, (size: Size) => string>>,
  Expect<Equal<keyof typeof Direction, "Up" | "Down" | "Left" | "Right">>,
  Expect<Equal<typeof moveDirection, Direction>>,
  Expect<Equal<typeof formatDirection, (direction: Direction) => string>>,
];

const sizeValues: ["S", "M", "L", "XL"] = [Size.S, Size.M, Size.L, Size.XL];
const directionValues: ["UP", "DOWN", "LEFT", "RIGHT"] = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];
const sizeMessage: string = printSize(Size.L);
const directionMessage: string = formatDirection(Direction.Up);

export {};
