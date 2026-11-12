import type { Equal, Expect } from "#helpers/type-test.js";
import type {
  Order,
  OrderStatus,
  ProductCategory,
  ProductId,
} from "./template.js";

type cases = [
  Expect<Equal<ProductId, string>>,
  Expect<Equal<ProductCategory, "food" | "book" | "clothing">>,
  Expect<Equal<Order["productId"], string>>,
  Expect<Equal<OrderStatus, "paid" | "shipped" | "delivered">>,
];

export {};
