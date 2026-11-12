import type { Equal, Expect } from "#helpers/type-test.js";
import type {
  ClothingSize,
  NameInput,
  PriceInput,
  Purchasable,
  PurchasableStatus,
  TextOnly,
} from "./template.js";

type cases = [
  Expect<Equal<PriceInput, "number">>,
  Expect<Equal<NameInput, "text">>,
  Expect<Equal<ClothingSize, "S" | "M" | "L">>,
  Expect<Equal<TextOnly<250 | 260>, never>>,
  Expect<Equal<PurchasableStatus, "inStock" | "lowStock">>,
  Expect<Equal<Purchasable<"soldOut">, never>>,
];

export {};
