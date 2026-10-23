# 객체 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 변수 선언의 `unknown`(값의 타입이 아직 확인되지 않았다는 뜻)을 객체 타입으로 바꿉니다. 값 부분은 그대로입니다. `TODO 1`·`TODO 3`·`TODO 4`·`TODO 6`의 정답은 다음과 같고, `TODO 2`의 `ebook`은 `book`과, `TODO 5`의 `guestProfile`은 `memberProfile`과 같은 객체 타입을 적습니다. 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export const book: {
  id: string;
  title: string;
  price: number;
  discountRate?: number;
  tags: string[];
} = {
  id: "b001",
  title: "정적 타이핑 안내서",
  price: 18_000,
  discountRate: 0.1,
  tags: ["typescript", "types"],
};

export const stockByIsbn: { [isbn: string]: number } = {
  b001: 3,
  b002: 10,
};

export const memberProfile: {
  id: string;
  email: string;
  nickname?: string;
  favoriteTags: string[];
  marketingOptIn: boolean;
} = {
  id: "u001",
  email: "teacher@codeit.kr",
  nickname: "타입 선생님",
  favoriteTags: ["typescript", "backend"],
  marketingOptIn: true,
};

export const levelByCourse: { [courseId: string]: number } = {
  ts101: 3,
  ts201: 1,
};
```

## 해설

`unknown`으로는 프로퍼티가 있는지와 그 타입을 검사하지 못합니다. 객체 타입으로 프로퍼티 이름과 값의 타입을 함께 적어 구조를 고정합니다.

- `TODO 1`: `book`의 `id`, `title`은 문자열, `price`는 숫자, `tags`는 문자열 배열이므로 각각 `string`, `number`, `string[]`입니다. `discountRate`는 `ebook`에는 없으므로 `?`를 붙여 선택 프로퍼티로 둡니다.
- `TODO 2`: `ebook`에 `book`과 같은 객체 타입을 적습니다. `discountRate?`가 선택 프로퍼티이므로 이 프로퍼티가 없는 `ebook`도 같은 타입을 만족합니다.
- `TODO 3`: 재고표는 `b001`, `b002`처럼 키가 늘어날 수 있으므로 키 이름을 나열하지 않고 인덱스 시그니처 `{ [isbn: string]: number }`로 "키는 어떤 문자열이든 되고 값은 모두 숫자"라고 적습니다.
- `TODO 4`: `memberProfile`은 `nickname`을 가지지만 `guestProfile`에는 없으므로 `nickname?: string`으로 선택 프로퍼티를 둡니다. `favoriteTags`는 `string[]`, `marketingOptIn`은 `boolean`입니다.
- `TODO 5`: `guestProfile`에 `memberProfile`과 같은 객체 타입을 적습니다.
- `TODO 6`: `levelByCourse`도 강의별 값이 모두 숫자인 사전 형태이므로 인덱스 시그니처 `{ [courseId: string]: number }`입니다.

인덱스 시그니처의 `isbn`, `courseId`는 설명을 위한 자리표시자 이름입니다. `[id: string]`처럼 다른 이름을 써도 확인 명령은 통과합니다.

## 자주 하는 실수

- `discountRate`에 `?`를 빼고 두 객체에 같은 타입을 적으면, 이 프로퍼티가 없는 `ebook`에서 `error TS2741: Property 'discountRate' is missing in type '{ id: string; title: string; price: number; tags: string[]; }' but required in type '{ id: string; title: string; price: number; discountRate: number; tags: string[]; }'.`가 표시됩니다.
- 재고표를 `{ b001: number; b002: number }`처럼 지금 있는 키로 나열하면 `template.ts`에서는 진단이 나오지 않지만, 키가 늘어날 수 있는 구조를 표현하지 못하므로 `test-cases.ts(32,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다.
