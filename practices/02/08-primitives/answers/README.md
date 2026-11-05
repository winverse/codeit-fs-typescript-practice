# 원시 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 변수 선언의 `unknown`(값의 타입이 아직 확인되지 않았다는 뜻)을 다음처럼 바꿉니다. 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export let emptyTitle: string = "";
export let stock: number = NaN;
export let shippingFee: number = Infinity;
export let isDigital: boolean = true;
export let lastUpdated: undefined = undefined;
export let archivedAt: null = null;

export let sellerName: string = "코드잇 스토어";
export let discountRate: number = 0;
export let hasCoupon: boolean = false;
export let deletedAt: null = null;
export let publishedAt: undefined = undefined;
```

## 해설

`unknown`은 `test-cases.ts`가 기대하는 원시 타입과 같지 않습니다. 값의 종류를 보고 원시 타입 이름을 소문자로 적습니다.

- `TODO 1`: 빈 문자열 `""`도 문자열이므로 `emptyTitle`은 `string`입니다.
- `TODO 2`, `TODO 3`: `NaN`과 `Infinity`도 `number` 타입에 속하므로 `stock`, `shippingFee`는 `number`입니다.
- `TODO 4`: `true`는 `boolean`입니다.
- `TODO 5`: 값이 아직 정해지지 않은 상태를 나타내는 `undefined`는 타입 이름도 `undefined`입니다.
- `TODO 6`: 의도적으로 "없음"을 나타내는 `null`은 타입 이름도 `null`입니다.
- `TODO 7`~`TODO 11`: 추가 문제도 같은 기준입니다. `sellerName`은 `string`, `0`인 `discountRate`는 `number`, `false`인 `hasCoupon`은 `boolean`, `deletedAt`은 `null`, `publishedAt`은 `undefined`입니다.

## 자주 하는 실수

- `undefined`와 `null`을 서로 바꿔 적으면 값과 타입이 맞지 않습니다. 예를 들어 `export let lastUpdated: null = undefined;`로 쓰면 `template.ts`의 `lastUpdated` 선언 줄에 `error TS2322: Type 'undefined' is not assignable to type 'null'.`이 표시됩니다.
- 대문자로 시작하는 `String`을 쓰면 `template.ts`에서는 진단이 나오지 않지만, `String`은 원시 타입 `string`과 다른 타입이므로 `test-cases.ts(17,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다(`emptyTitle: String`으로 쓴 경우).
