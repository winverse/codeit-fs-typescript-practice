# keyof와 인덱스드 액세스 타입 조합 정답과 해설

`template.ts`에서 `TODO` 주석 아래 함수의 선언 줄을 다음처럼 바꿉니다. 함수 본문은 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

export function getValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

export function getMemberValue<K extends keyof Member>(
  target: Member,
  key: K,
): Member[K] {
  return target[key];
}
```

## 해설

`K extends keyof T`는 `K`가 `T`의 실제 키 중 하나여야 한다는 제약입니다. 반환 타입 `T[K]`는 넘긴 키의 프로퍼티 타입입니다. 그래서 `getProperty(product, "name")`은 `string`, `getProperty(product, "price")`는 `number`가 됩니다.

- `TODO 1`: `object: T`, `key: K`로 받고 반환 타입을 `T[K]`로 둡니다. `T`는 넘긴 객체에서, `K`는 넘긴 키 문자열에서 추론됩니다.
- `TODO 2`: `items: T[]`로 객체 배열을 받습니다. `map`이 요소마다 `item[key]`를 꺼내므로 반환 타입은 `T[K]`의 배열인 `T[K][]`입니다. 그래서 `getValues(products, "price")`는 `number[]`입니다.
- `TODO 3`: 객체 타입이 `Member`로 정해져 있으므로 타입 파라미터는 `K` 하나면 됩니다. `K extends keyof Member`로 제한하고 반환 타입을 `Member[K]`로 둡니다. 시작 코드처럼 키를 `keyof Member`로만 받으면 어떤 키를 넘겨도 반환 타입이 `string | number`입니다.

## 자주 하는 실수

- `getProperty<T, K>(object: T, key: K): T[K]`처럼 `extends keyof T`를 빼면 `template.ts`의 `getProperty` 선언 줄과 `return` 줄에 `error TS2536: Type 'K' cannot be used to index type 'T'.`가 표시됩니다. 제약이 없으면 `K`가 `T`의 키라는 보장이 없어 `T[K]`를 쓸 수 없습니다.
- `getValues`의 반환 타입을 `T[K]`로 두면 `return` 줄에 `error TS2322: Type 'T[K][]' is not assignable to type 'T[K]'.`가 표시됩니다. `map`은 배열을 반환하므로 `T[K][]`로 씁니다.
