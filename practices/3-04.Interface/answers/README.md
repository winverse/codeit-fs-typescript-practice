# Interface 정답과 해설

`template.ts`에서 `TODO` 주석 아래 프로퍼티의 `unknown`을 다음처럼 바꿉니다. 객체 값과 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export interface Course {
  id: string;
  title: string;
  price: number;
  published?: boolean;
}

export interface OnlineCourse extends Course {
  streamingHours: number;
}

export interface Account {
  id: string;
  email: string;
  displayName?: string;
}

export interface CreatorAccount extends Account {
  subscriberCount: number;
}
```

## 해설

Interface는 객체가 가져야 할 프로퍼티와 그 타입을 이름 붙여 정의하는 계약입니다. 각 프로퍼티의 타입은 그 Interface를 쓰는 객체의 값에서 읽어 냅니다.

- `TODO 1`~`TODO 3`: `course`의 `id`는 `"ts-101"`, `title`은 `"TypeScript 시작하기"`, `price`는 `39_000`이므로 각각 `string`, `string`, `number`입니다.
- `TODO 4`: `published`는 `course`에는 `true`로 있지만 `onlineCourse`에는 없습니다. 그래서 `?`를 남겨 선택 프로퍼티로 두고 타입은 `boolean`으로 적습니다.
- `TODO 5`: `OnlineCourse`는 `extends Course`로 `Course`의 프로퍼티를 모두 물려받으므로, 새로 추가하는 `streamingHours: number`만 적습니다.
- `TODO 6`~`TODO 8`: 추가 문제의 `account` 값을 보면 `id`, `email`, `displayName`이 모두 문자열이므로 `string`입니다. `displayName`은 `creatorAccount`에 없으므로 `?`를 남깁니다.
- `TODO 9`: `CreatorAccount`가 추가하는 `subscriberCount`는 `1200`이므로 `number`입니다.

`OnlineCourse`는 `Course`의 프로퍼티를 모두 가지므로, `test-cases.ts`의 `const upcastCourse: Course = onlineCourse;`처럼 `Course`가 필요한 자리에도 그대로 넣을 수 있습니다.

## 자주 하는 실수

- `published`의 `?`를 지우고 `published: boolean;`으로 쓰면, 이 프로퍼티가 없는 `onlineCourse` 선언 줄에 `error TS2741: Property 'published' is missing in type '{ id: string; title: string; price: number; streamingHours: number; }' but required in type 'OnlineCourse'.`가 표시됩니다. `extends`로 확장한 Interface도 원래 Interface의 필수 프로퍼티를 모두 요구합니다.
- 값과 다른 타입을 적으면 그 값이 들어 있는 객체에서 진단이 나옵니다. 예를 들어 `price: string;`으로 쓰면 `course`의 `price: 39_000,` 줄에 `error TS2322: Type 'number' is not assignable to type 'string'.`이 표시됩니다.
