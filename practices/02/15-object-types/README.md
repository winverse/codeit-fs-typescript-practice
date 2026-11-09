# 객체 타입

## 목표

필수·선택 프로퍼티와 인덱스 시그니처로 객체 구조를 표현합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/02/15-object-types`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 객체가 모두 `unknown`(값의 타입이 아직 확인되지 않았다는 뜻)으로 선언되어 있어 프로퍼티 구조를 검사할 수 없는 상태입니다.
- `test-cases.ts`: 책·회원 객체의 필수·선택 프로퍼티와 인덱스 시그니처를 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(28,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 4`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `book`에 객체 타입을 지정하되 `discountRate`는 선택 프로퍼티로 둡니다.
2. `TODO 2`: `ebook`에 `book`과 같은 객체 타입을 지정합니다.
3. `TODO 3`: `stockByIsbn`을 문자열 키와 숫자 값을 갖는 인덱스 시그니처로 선언합니다.
4. `TODO 4`: `memberProfile`에 객체 타입을 지정하되 `nickname`은 선택 프로퍼티로 둡니다.
5. `TODO 5`: `guestProfile`에 `memberProfile`과 같은 객체 타입을 지정합니다.
6. `TODO 6`: `levelByCourse`를 문자열 키와 숫자 값을 갖는 인덱스 시그니처로 선언합니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/02/15-object-types
```

## 성공 기준

객체 구조와 인덱스 시그니처가 기대와 일치하면 진단 없이 `PASS: practices/02/15-object-types`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
