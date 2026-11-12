export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

export type ActiveStatus = Exclude<OrderStatus, "cancelled">;

export const nextStatus: ActiveStatus = "paid";

export type ShopEvent =
  | { type: "order"; orderId: number }
  | { type: "refund"; orderId: number; amount: number }
  | { type: "review"; productId: string; rating: number };

export type OrderEvent = Extract<ShopEvent, { type: "order" | "refund" }>;

export const refundEvent: OrderEvent = {
  type: "refund",
  orderId: 1,
  amount: 39_000,
};

// 추가 문제 해답
export function createOrder(productId: string, quantity: number) {
  return { orderId: 1, productId, quantity };
}

export type Order = ReturnType<typeof createOrder>;

export type MaybeCouponCode = string | null | undefined;

export type CouponCode = NonNullable<MaybeCouponCode>;
