# 제네릭 정답과 해설

`template.ts`에서 `TODO` 주석 아래 줄의 `any`를 다음처럼 바꿉니다. 함수 본문과 객체 값은 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export function wrapInArray<T>(value: T): T[] {
  return [value];
}

export function getFirstValue<T>(items: T[]): T | undefined {
  return items[0];
}

export interface ApiEnvelope<T> {
  data: T;
  status: number;
}

export interface Box<T> {
  value: T;
  createdAt: string;
}

export function pickLast<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}
```

## 해설

제네릭은 타입을 파라미터처럼 받는 구조입니다. 함수 이름 뒤 `<T>`로 타입 파라미터를 선언하면 호출할 때 넘긴 값에서 `T`가 정해지고, 그 `T`를 파라미터와 반환 타입에 함께 쓰면 입력 타입이 반환값까지 이어집니다. 시작 상태처럼 `any`를 쓰면 반환 타입이 입력과 관계없이 `any`나 `any[]`로 고정되어 이 연결이 끊깁니다.

- `TODO 1`: `value: T`, 반환 `T[]`로 바꾸면 `wrapInArray(3)`은 `T`가 `number`로 정해져 `number[]`, `wrapInArray("TS")`는 `string[]`이 됩니다.
- `TODO 2`: `items: T[]`로 배열 요소 타입을 `T`로 받고, 반환 타입을 `T | undefined`로 둡니다. 빈 배열에서 `items[0]`은 값이 없으므로 `undefined` 가능성을 반환 타입에 드러냅니다. 그래서 `getFirstValue([10, 20])`은 `number | undefined`입니다.
- `TODO 3`: `ApiEnvelope<T>`는 이미 타입 파라미터 `T`를 선언했으므로 `data: T`로 쓰면 됩니다. `ApiEnvelope<number>`의 `data`는 `number`, `ApiEnvelope<string>`의 `data`는 `string`이 됩니다.
- `TODO 4`: 추가 문제의 `Box<T>`도 같은 원리로 `value: T`입니다.
- `TODO 5`: `pickLast`도 `TODO 2`처럼 `<T>(items: T[]): T | undefined`입니다.

## 자주 하는 실수

- `getFirstValue<T>(items: T[]): T`처럼 `undefined`를 빼면 `template.ts`에서는 진단이 나오지 않지만, 빈 배열일 때의 가능성이 반환 타입에서 사라져 `test-cases.ts(23,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다.
- 타입 파라미터를 추가하고도 반환 타입을 `any[]`로 남기면(`wrapInArray<T>(value: T): any[]`) 입력 타입이 반환값에 이어지지 않아 `test-cases.ts(21,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다.
