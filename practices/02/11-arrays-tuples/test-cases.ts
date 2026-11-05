import type { Equal, Expect } from "../../../_helpers/type-test.js";
import {
  cartIds,
  coordinate,
  discountGroups,
  orderLine,
  point,
  sizeMatrix,
} from "./template.js";

type cases = [
  Expect<Equal<typeof cartIds, string[]>>,
  Expect<Equal<typeof sizeMatrix, number[][]>>,
  Expect<Equal<typeof point, readonly [number, number]>>,
  Expect<Equal<typeof orderLine, readonly [string, number, boolean]>>,
  Expect<Equal<typeof discountGroups, string[][]>>,
  Expect<Equal<typeof coordinate, readonly [number, number]>>,
];

export {};
