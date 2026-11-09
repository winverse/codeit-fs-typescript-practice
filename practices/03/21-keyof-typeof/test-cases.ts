import type { Equal, Expect } from "../../../_helpers/type-test.js";
import {
  book,
  bookKeys,
  filter,
  filterKeys,
  readBookValue,
  readFilterValue,
} from "./template.js";
import type {
  BookFromValue,
  BookKey,
  FilterFromValue,
  FilterKey,
} from "./template.js";

type cases = [
  Expect<Equal<BookFromValue, typeof book>>,
  Expect<Equal<BookKey, "id" | "title" | "price" | "inStock">>,
  Expect<Equal<(typeof bookKeys)[number], BookKey>>,
  Expect<Equal<ReturnType<typeof readBookValue>, BookFromValue[BookKey]>>,
  Expect<Equal<FilterFromValue, typeof filter>>,
  Expect<Equal<FilterKey, "sort" | "page" | "onlyMembers">>,
  Expect<Equal<(typeof filterKeys)[number], FilterKey>>,
  Expect<Equal<ReturnType<typeof readFilterValue>, FilterFromValue[FilterKey]>>,
];

export {};
