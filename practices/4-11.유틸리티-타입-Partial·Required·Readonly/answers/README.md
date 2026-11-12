# 유틸리티 타입: Partial·Required·Readonly 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type ReviewEdit = Partial<Review>;
export type ResolvedSearchOptions = Required<SearchOptions>;

export type IssuedReceipt = Readonly<Receipt>;
export type FrozenSearchOptions = Readonly<Required<SearchOptions>>;
```

## 해설

세 유틸리티 타입은 원본 타입의 키는 그대로 두고 수식어만 바꿉니다. `Partial`은 `?`를 붙이고, `Required`는 `?`를 없애고, `Readonly`는 `readonly`를 붙입니다.

- `TODO 1`: 바꿀 프로퍼티만 담으려면 모든 프로퍼티가 선택 프로퍼티여야 하므로 `Partial<Review>`를 씁니다. 그래서 `editReview`에 `{ rating: 4 }`만 넘길 수 있습니다.
- `TODO 2`: `resolveSearch`는 빠진 값을 기본값으로 채워 반환하므로, 반환 타입은 `?`를 없앤 `Required<SearchOptions>`입니다. 그래서 `firstPage`에 담는 `page`는 `number`입니다.
- `TODO 3`: 발행한 영수증은 고치지 않아야 하므로 `Readonly<Receipt>`로 모든 프로퍼티에 `readonly`를 붙입니다. `printReceipt` 안에서 `receipt.total = 0;`처럼 다시 할당하면 오류가 납니다.
- `TODO 4`: 유틸리티 타입의 결과도 타입이므로 다른 유틸리티 타입에 넘길 수 있습니다. `Required`로 `?`를 없앤 결과를 `Readonly`에 넘깁니다. `Readonly<ResolvedSearchOptions>`로 써도 같습니다.

네 `TODO` 모두 `{ readonly orderId: number; readonly total: number }`처럼 결과 타입을 직접 적어도 확인 명령은 통과합니다. 다만 `Review`, `SearchOptions`, `Receipt`의 프로퍼티가 바뀌면 직접 적은 타입도 따로 고쳐야 하므로 유틸리티 타입을 씁니다.

## 자주 하는 실수

- `TODO 2`에 `Partial<SearchOptions>`를 쓰면 `template.ts`의 `firstPage` 줄에 `error TS2322: Type 'number | undefined' is not assignable to type 'number'.`가 표시됩니다. 선택 프로퍼티가 그대로 남아 `page`에 `undefined` 가능성이 생기기 때문입니다.
- `TODO 4`를 `Required<SearchOptions> & Readonly<SearchOptions>`처럼 Intersection으로 합치면 `template.ts`에는 진단이 없고 `test-cases.ts(16,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.`만 표시됩니다. 이렇게 합친 타입은 `page`에 다시 할당해도 오류가 나지 않아 읽기 전용이 되지 않습니다. `Required`의 결과를 `Readonly`에 넘겨야 두 변환이 함께 적용됩니다.
