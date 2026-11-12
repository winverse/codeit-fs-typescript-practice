export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

// TODO 1: ActiveStatus가 "pending" | "paid" | "shipped"가 되도록 OrderStatus에 유틸리티 타입을 쓰세요.
export type ActiveStatus = any;

export const nextStatus: ActiveStatus = "paid";

export type ShopEvent =
  | { type: "order"; orderId: number }
  | { type: "refund"; orderId: number; amount: number }
  | { type: "review"; productId: string; rating: number };

// TODO 2: OrderEvent가 type이 "order", "refund"인 두 구성원의 Union이 되도록 ShopEvent에 유틸리티 타입을 쓰세요.
export type OrderEvent = any;

export const refundEvent: OrderEvent = {
  type: "refund",
  orderId: 1,
  amount: 39_000,
};

// 추가 문제
export function createOrder(productId: string, quantity: number) {
  return { orderId: 1, productId, quantity };
}

// TODO 3: Order가 createOrder 함수의 반환 타입이 되도록 유틸리티 타입을 쓰세요.
export type Order = any;

export type MaybeCouponCode = string | null | undefined;

// TODO 4: CouponCode가 null과 undefined가 없는 타입이 되도록 MaybeCouponCode에 유틸리티 타입을 쓰세요.
export type CouponCode = any;
