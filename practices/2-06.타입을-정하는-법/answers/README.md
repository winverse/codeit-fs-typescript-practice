# 타입을 정하는 법 정답과 해설

`template.ts`에서 `TODO` 주석 아래 변수 선언 여섯 줄을 다음처럼 바꿉니다. 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export let managerName: string;
export let maxStudents: number;
export let isClosed: boolean;

export let classroomLabel: string;
export let currentWeek: number;
export let hasHomework: boolean;
```

## 해설

- `TODO 1`~`TODO 3`: `managerName`, `maxStudents`, `isClosed`는 선언할 때 값이 없고 아래에서 값을 할당합니다. 선언 시점에 TypeScript가 볼 값이 없으므로 할당할 값에 맞춰 `: string`, `: number`, `: boolean`을 변수 이름 뒤에 직접 적습니다.
- `TODO 4`~`TODO 6`: 추가 문제도 같은 원리입니다. `classroomLabel`에는 `"A-103"`, `currentWeek`에는 `4`, `hasHomework`에는 `true`가 나중에 할당되므로 각각 `string`, `number`, `boolean`으로 선언합니다.
- `TODO`가 없는 `productId`, `price`, `membersOnly`, `courseName`, `lessonCount`는 초깃값을 바로 할당하므로 TypeScript가 그 값을 보고 타입을 추론합니다. `export let productId: string = "c001";`처럼 타입을 직접 적어도 확인 명령은 통과하지만, 값을 바로 할당하고 타입이 분명하면 추론에 맡깁니다.

## 자주 하는 실수

- 할당할 값과 다른 타입을 선언하면 할당하는 줄에서 진단이 나옵니다. 예를 들어 `export let maxStudents: string;`으로 선언하면 `maxStudents = 30;` 줄에 `error TS2322: Type 'number' is not assignable to type 'string'.`이 표시됩니다.
- `// 추가 문제` 아래 `TODO 4`~`TODO 6`을 그대로 두면 앞의 세 문제를 맞게 풀어도 `PASS`가 표시되지 않습니다. 첫 진단은 `template.ts`의 `classroomLabel` 선언 줄에 나오는 `error TS7005: Variable 'classroomLabel' implicitly has an 'any' type.`입니다. 타입을 적지 않아 TypeScript가 타입 검사를 대부분 하지 않는 `any`로 처리했다는 뜻입니다.
