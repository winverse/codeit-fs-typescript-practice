import type { Equal, Expect } from "#helpers/type-test.js";
import {
  getMemberValue,
  getProperty,
  getValues,
  member,
  product,
  products,
} from "./template.js";

const productName = getProperty(product, "name");
const productPrice = getProperty(product, "price");
const memberPoint = getProperty(member, "point");
const prices = getValues(products, "price");
const names = getValues(products, "name");
const nickname = getMemberValue(member, "nickname");
const point = getMemberValue(member, "point");

type cases = [
  Expect<Equal<typeof productName, string>>,
  Expect<Equal<typeof productPrice, number>>,
  Expect<Equal<typeof memberPoint, number>>,
  Expect<Equal<typeof prices, number[]>>,
  Expect<Equal<typeof names, string[]>>,
  Expect<Equal<typeof nickname, string>>,
  Expect<Equal<typeof point, number>>,
];

export {};
