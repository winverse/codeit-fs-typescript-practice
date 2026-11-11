# Interface

## 목표

공통 객체 구조를 Interface로 정의하고 확장합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/3-04.Interface`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: Interface 프로퍼티가 `unknown`이라 객체가 가진 구체적인 계약을 표현하지 못합니다.
- `test-cases.ts`: 기본 Interface의 프로퍼티와 확장한 Interface에 추가한 프로퍼티를 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(11,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

각 프로퍼티의 타입은 Interface 아래 객체에 들어 있는 값에 맞춥니다. `TODO 6`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `Course`의 `id`를 값과 맞는 타입으로 바꿉니다.
2. `TODO 2`: `Course`의 `title`을 값과 맞는 타입으로 바꿉니다.
3. `TODO 3`: `Course`의 `price`를 값과 맞는 타입으로 바꿉니다.
4. `TODO 4`: `Course`의 선택 프로퍼티 `published`를 값과 맞는 타입으로 바꿉니다.
5. `TODO 5`: `OnlineCourse`가 추가하는 `streamingHours`를 값과 맞는 타입으로 바꿉니다.
6. `TODO 6`: `Account`의 `id`를 값과 맞는 타입으로 바꿉니다.
7. `TODO 7`: `Account`의 `email`을 값과 맞는 타입으로 바꿉니다.
8. `TODO 8`: `Account`의 선택 프로퍼티 `displayName`을 값과 맞는 타입으로 바꿉니다.
9. `TODO 9`: `Account`를 확장한 `CreatorAccount`가 추가하는 `subscriberCount`를 값과 맞는 타입으로 바꿉니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/3-04.Interface
```

## 성공 기준

기본 Interface와 확장한 Interface가 기대와 일치하면 진단 없이 `PASS: practices/3-04.Interface`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
