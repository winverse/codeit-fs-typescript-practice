# 배열과 튜플

## 목표

길이가 자유로운 배열과 위치가 정해진 `readonly` 튜플을 구분합니다.

## 시작하기

`codeit-fs-typescript-basic-practice` 폴더의 `practices/02/10-arrays-tuples`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 배열과 튜플 값의 타입이 모두 `unknown`(값의 타입이 아직 확인되지 않았다는 뜻)으로 선언되어 있습니다.
- `test-cases.ts`: 목록은 배열, 위치가 정해진 값은 `readonly` 튜플로 표현했는지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(12,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 4`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `cartIds`를 문자열 배열 타입으로 선언합니다.
2. `TODO 2`: `sizeMatrix`를 숫자 배열의 배열 타입으로 선언합니다.
3. `TODO 3`: `point`를 숫자 두 개의 `readonly` 튜플 타입으로 선언합니다.
4. `TODO 4`: `orderLine`을 문자열·숫자·불린 순서의 `readonly` 튜플 타입으로 선언합니다.
5. `TODO 5`: `discountGroups`를 문자열 배열의 배열 타입으로 선언합니다.
6. `TODO 6`: `coordinate`를 숫자 두 개의 `readonly` 튜플 타입으로 선언합니다.

## 확인하기

`codeit-fs-typescript-basic-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/10-arrays-tuples
```

## 성공 기준

배열과 튜플의 타입이 기대와 일치하면 진단 없이 `PASS: practices/02/10-arrays-tuples`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
