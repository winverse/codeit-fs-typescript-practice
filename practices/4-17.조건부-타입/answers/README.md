# 조건부 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type InputType<T> = T extends number ? "number" : "text";

export type TextOnly<T> = T extends string ? T : never;

export type Purchasable<T> = T extends "soldOut" ? never : T;
```

## 해설

조건부 타입 `T extends U ? X : Y`는 `T`를 `U`에 할당할 수 있으면 `X`, 없으면 `Y`를 결과 타입으로 고릅니다.

- `TODO 1`: `Product["price"]`는 `number`라 `PriceInput`은 `"number"`입니다. `Product["name"]`은 `string`이라 `NameInput`은 `"text"`입니다.
- `TODO 2`: `TextOnly`에 Union을 넘기면 구성원마다 조건이 따로 적용됩니다. `"S"`, `"M"`, `"L"`은 그대로 남고 `250`, `260`, `270`은 `never`가 됩니다. `never`는 Union에서 사라지므로 `ClothingSize`는 `"S" | "M" | "L"`입니다. 참인 분기에 `string`이 아니라 `T`를 적어야 구성원의 리터럴 타입이 남습니다.
- `TODO 3`: 빼야 할 구성원이 조건을 만족하므로 참인 분기에 `never`, 거짓인 분기에 `T`를 둡니다. `"soldOut"`은 `never`가 되어 사라지고, `PurchasableStatus`는 `"inStock" | "lowStock"`입니다.

`TODO 2`를 `Extract<T, string>`으로, `TODO 3`을 `Exclude<T, "soldOut">`으로 써도 결과가 같아 확인 명령은 통과합니다. 두 유틸리티 타입도 이런 조건부 타입으로 만든 타입입니다.

## 자주 하는 실수

- `TODO 2`의 참인 분기에 `string`을 적으면(`T extends string ? string : never`) `ClothingSize`가 `string`이 되어 `test-cases.ts(14,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다.
- `TODO 3`의 두 분기를 바꿔 `T extends "soldOut" ? T : never`로 쓰면 `"soldOut"`만 남아 `test-cases.ts(16,10)`과 `(17,10)`에 `error TS2344`가 표시됩니다.
