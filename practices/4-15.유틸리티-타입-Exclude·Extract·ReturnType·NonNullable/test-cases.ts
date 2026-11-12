import type { Equal, Expect } from "#helpers/type-test.js";
import type {
  ActiveStatus,
  CouponCode,
  Order,
  OrderEvent,
} from "./template.js";

type cases = [
  Expect<Equal<ActiveStatus, "pending" | "paid" | "shipped">>,
  Expect<
    Equal<
      OrderEvent,
      | { type: "order"; orderId: number }
      | { type: "refund"; orderId: number; amount: number }
    >
  >,
  Expect<
    Equal<Order, { orderId: number; productId: string; quantity: number }>
  >,
  Expect<Equal<CouponCode, string>>,
];

export {};
