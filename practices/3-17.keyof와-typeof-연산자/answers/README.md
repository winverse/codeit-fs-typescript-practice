# keyof와 typeof 연산자 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type BookFromValue = typeof book;
export type BookKey = keyof typeof book;

export type FilterFromValue = typeof filter;
export type FilterKey = keyof typeof filter;
```

## 해설

`typeof`는 이미 있는 값에서 타입을 꺼내고, `keyof`는 객체 타입에서 프로퍼티 이름만 꺼내 Union 타입으로 만듭니다. 타입 위치의 `typeof`는 JavaScript 표현식의 `typeof`처럼 `"object"` 같은 문자열을 돌려주지 않고 값의 타입을 가져옵니다.

- `TODO 1`: `typeof book`은 `book` 값의 구조를 그대로 가져온 `{ id: string; title: string; price: number; inStock: boolean }` 타입입니다.
- `TODO 2`: `keyof typeof book`은 먼저 `typeof`로 `book`의 타입을 얻고, 그 키 이름을 `"id" | "title" | "price" | "inStock"` Union으로 만듭니다. `BookFromValue`가 이미 있으므로 `keyof BookFromValue`로 적어도 같은 결과입니다.
- `TODO 3`: 추가 문제도 같은 방식으로 `typeof filter`입니다.
- `TODO 4`: `keyof typeof filter`는 `"sort" | "page" | "onlyMembers"`입니다.

키 Union을 `"id" | "title" | "price" | "inStock"`처럼 직접 나열해도 확인 명령은 통과합니다. 다만 프로퍼티 이름을 두 곳에 적게 되어 `book` 구조가 바뀌면 `BookKey`를 따로 고쳐야 하므로, 값에서 가져오는 `keyof typeof`를 씁니다.

## 자주 하는 실수

- `typeof` 없이 `keyof book`으로 쓰면 `template.ts`의 `BookKey` 줄에 `error TS2749: 'book' refers to a value, but is being used as a type here. Did you mean 'typeof book'?`가 표시됩니다. `book`은 값이므로 `keyof`를 적용하려면 먼저 `typeof`로 타입을 꺼내야 합니다.
- `BookFromValue = book`처럼 값 이름을 타입 자리에 그대로 써도 `BookFromValue` 줄에 같은 `error TS2749` 진단이 표시됩니다.
