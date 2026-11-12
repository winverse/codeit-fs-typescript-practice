# 유틸리티 타입: Exclude·Extract·ReturnType·NonNullable 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type ActiveStatus = Exclude<OrderStatus, "cancelled">;
export type OrderEvent = Extract<ShopEvent, { type: "order" | "refund" }>;

export type Order = ReturnType<typeof createOrder>;
export type CouponCode = NonNullable<MaybeCouponCode>;
```

## 해설

Union에서 구성원을 거를 때는 뺄 구성원과 남길 구성원 가운데 적는 쪽이 적은 유틸리티 타입을 고릅니다.

- `TODO 1`: 뺄 구성원이 `"cancelled"` 하나이므로 `Exclude<OrderStatus, "cancelled">`가 간결합니다. `OrderStatus`의 구성원 가운데 `"cancelled"`에 할당 가능한 구성원을 빼서 `"pending" | "paid" | "shipped"`가 됩니다.
- `TODO 2`: `Extract<ShopEvent, { type: "order" | "refund" }>`는 `type`이 `"order"`나 `"refund"`인 구성원만 남깁니다. `"review"` 구성원은 `{ type: "order" | "refund" }`에 할당할 수 없으므로 빠집니다. 남길 구성원이 둘, 뺄 구성원이 하나라 `Exclude<ShopEvent, { type: "review" }>`로 써도 결과가 같고 확인 명령은 통과합니다.
- `TODO 3`: `ReturnType`에는 함수 타입을 넘기므로 `typeof createOrder`로 씁니다. 결과는 `{ orderId: number; productId: string; quantity: number }`입니다.
- `TODO 4`: `NonNullable<MaybeCouponCode>`는 `null`과 `undefined`를 빼서 `string`이 됩니다. `Exclude<MaybeCouponCode, null | undefined>`로 써도 결과가 같습니다.

`TODO 1`을 `Extract<OrderStatus, "pending" | "paid" | "shipped">`로 써도 통과합니다. `"pending" | "paid" | "shipped"`처럼 결과 타입을 직접 적어도 네 `TODO` 모두 통과합니다. 다만 `OrderStatus`, `ShopEvent`, `createOrder`가 바뀌면 직접 적은 타입도 따로 고쳐야 하므로 유틸리티 타입을 씁니다.

## 자주 하는 실수

- `TODO 1`에 `Extract`를 쓰면 `template.ts`의 `nextStatus` 줄에 `error TS2322: Type '"paid"' is not assignable to type '"cancelled"'.`가 표시됩니다. `Extract`는 지정한 구성원만 남기므로 결과가 `"cancelled"` 하나뿐입니다.
- `TODO 3`을 `ReturnType<createOrder>`로 쓰면 `template.ts`의 `Order` 줄에 `error TS2749: 'createOrder' refers to a value, but is being used as a type here. Did you mean 'typeof createOrder'?`가 표시됩니다.
