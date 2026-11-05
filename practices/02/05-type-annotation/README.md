# 타입을 정하는 법

## 목표

타입 추론에 맡겨도 되는 자리와 타입을 직접 선언해야 하는 자리를 구분합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/02/05-type-annotation`에서 진행합니다. 의존성을 아직 설치하지 않았다면 `codeit-fs-typescript-practice` 폴더에서 먼저 설치합니다.

```bash
pnpm install
```

## 수정할 파일과 시작 상태

- `template.ts`: 초깃값이 있는 변수와 나중에 값이 할당되는 변수가 함께 있습니다. 초깃값이 있는 `productId`, `price`, `membersOnly`, `courseName`, `lessonCount`는 타입 추론에 맡기므로 고치지 않습니다. 나중에 값이 할당되는 변수는 타입도 초깃값도 없어 TypeScript가 타입을 정하지 못하고, 타입 검사를 대부분 하지 않는 `any` 타입으로 처리합니다.
- `test-cases.ts`: 각 변수의 최종 타입을 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `template.ts`의 `TODO` 아래 변수마다 `template.ts(6,12): error TS7005: Variable 'managerName' implicitly has an 'any' type.` 같은 진단이 표시됩니다. 타입을 적지 않아 `any`가 되었다는 뜻입니다. 이어서 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 `error TS2344: Type 'false' does not satisfy the constraint 'true'.` 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 그 파일의 줄과 칸이며, `test-cases.ts` 진단은 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 4`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `managerName`에 나중에 할당되는 문자열 값에 맞는 타입을 직접 선언합니다.
2. `TODO 2`: `maxStudents`에 나중에 할당되는 숫자 값에 맞는 타입을 직접 선언합니다.
3. `TODO 3`: `isClosed`에 나중에 할당되는 불린 값에 맞는 타입을 직접 선언합니다.
4. `TODO 4`: `classroomLabel`에 나중에 할당되는 문자열 값에 맞는 타입을 직접 선언합니다.
5. `TODO 5`: `currentWeek`에 나중에 할당되는 숫자 값에 맞는 타입을 직접 선언합니다.
6. `TODO 6`: `hasHomework`에 나중에 할당되는 불린 값에 맞는 타입을 직접 선언합니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/05-type-annotation
```

## 성공 기준

모든 변수의 타입이 기대와 일치하면 진단 없이 `PASS: practices/02/05-type-annotation`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
