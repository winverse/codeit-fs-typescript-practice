# 인덱스드 액세스 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 줄을 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type ProductId = Product["id"];
export type ProductCategory = Product["category"];

export interface Order {
  orderId: number;
  productId: Product["id"];
  quantity: number;
  status: "paid" | "shipped" | "delivered";
}

export type OrderStatus = Order["status"];
```

## 해설

인덱스드 액세스 타입 `Type["propertyName"]`은 객체 타입에서 그 프로퍼티의 타입을 가져옵니다. 시작 코드는 타입을 직접 적어 두어서 원본 프로퍼티의 타입과 어긋났습니다.

- `TODO 1`: `Product["id"]`는 `string`입니다. 시작 코드의 `number`는 원본과 달라서 `findProductById`의 `product.id === id`가 `string`과 `number`를 비교했습니다.
- `TODO 2`: `Product["category"]`는 `"food" | "book" | "clothing"`입니다. `string`으로 두면 `filterByCategory`에 `"toy"`처럼 없는 분류도 넘길 수 있습니다.
- `TODO 3`: 다른 Interface의 프로퍼티 타입도 가져올 수 있습니다. `productId: Product["id"]`로 두면 `Product`의 `id`와 같은 `string`이 됩니다. `TODO 1`에서 만든 `ProductId`를 써도 같습니다.
- `TODO 4`: `Order["status"]`는 `"paid" | "shipped" | "delivered"`입니다. 시작 코드에는 `"delivered"`가 빠져 있어 `changeStatus`로 배송 완료 상태를 넘길 수 없었습니다.

네 `TODO` 모두 `ProductId = string`, `OrderStatus = "paid" | "shipped" | "delivered"`처럼 결과 타입을 직접 적어도 확인 명령은 통과합니다. 다만 `Product`나 `Order`의 프로퍼티 타입이 바뀌면 직접 적은 타입도 따로 고쳐야 하므로, 원본에서 가져오는 인덱스드 액세스 타입을 씁니다.

## 자주 하는 실수

- 값에서 프로퍼티를 읽을 때처럼 `Product.id`로 쓰면 `template.ts`의 `ProductId` 줄에 `error TS2713: Cannot access 'Product.id' because 'Product' is a type, but not a namespace. Did you mean to retrieve the type of the property 'id' in 'Product' with 'Product["id"]'?`가 표시됩니다. 타입에서 프로퍼티 타입을 가져올 때는 대괄호와 따옴표를 씁니다.
