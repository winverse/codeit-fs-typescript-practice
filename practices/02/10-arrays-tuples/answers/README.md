# 배열과 튜플 정답과 해설

`template.ts`에서 `TODO` 주석 아래 변수 선언의 `unknown`(값의 타입이 아직 확인되지 않았다는 뜻)을 다음처럼 바꿉니다. 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export const cartIds: string[] = ["c001", "c002"];
export const sizeMatrix: number[][] = [[230, 240], [250]];
export const point: readonly [number, number] = [120, 340];

export const orderLine: readonly [string, number, boolean] = ["c001", 2, true];
export const discountGroups: string[][] = [["WELCOME10"], ["SPRING20", "VIP"]];
export const coordinate: readonly [number, number] = [37.5, 127.0];
```

## 해설

`unknown`은 `test-cases.ts`가 기대하는 배열·튜플 타입과 같지 않습니다. 값의 개수가 정해지지 않은 목록인지, 위치마다 의미가 정해진 구조인지 보고 고릅니다.

- `TODO 1`: 장바구니 상품 ID는 개수가 정해지지 않은 문자열 목록이므로 `string[]`입니다.
- `TODO 2`: `sizeMatrix`의 요소는 숫자 배열이므로 배열의 배열인 `number[][]`입니다. 안쪽 배열의 길이가 2와 1로 달라도 요소 타입만 같으면 됩니다.
- `TODO 3`: `point`는 첫 번째 자리와 두 번째 자리의 의미가 정해진 좌표이므로 튜플 `[number, number]`로 쓰고, 만든 뒤 바뀌지 않도록 `readonly`를 붙입니다.
- `TODO 4`: `orderLine`은 자리마다 타입이 문자열·숫자·불린으로 정해져 있으므로 그 순서대로 `readonly [string, number, boolean]`입니다.
- `TODO 5`: `discountGroups`는 문자열 배열을 담은 배열이므로 `string[][]`입니다.
- `TODO 6`: `coordinate`도 `point`처럼 숫자 두 개의 고정 구조이므로 `readonly [number, number]`입니다.

## 자주 하는 실수

- 좌표를 `number[]`로 선언하면 `template.ts`에서는 진단이 나오지 않지만, 배열은 길이와 자리의 의미를 표현하지 않으므로 `test-cases.ts(14,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다(`point: number[]`로 쓴 경우).
- `readonly`를 빼고 `[number, number]`로만 써도 같은 `test-cases.ts(14,10)` 진단이 표시됩니다. 이 실습은 바뀌지 않아야 하는 튜플에 `readonly`까지 붙였는지 검사합니다.
- 2차원 배열을 `number[]`로 선언하면 안쪽 배열을 숫자 자리에 넣는 셈이 되어, `template.ts`의 `sizeMatrix` 줄에 `error TS2322: Type '[number, number]' is not assignable to type 'number'.`가 표시됩니다.
