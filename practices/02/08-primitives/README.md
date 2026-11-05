# 원시 타입

## 목표

`string`, `number`, `boolean`, `undefined`, `null`을 실제 값과 연결합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/02/08-primitives`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 모든 값의 타입이 `unknown`(값의 타입이 아직 확인되지 않았다는 뜻)으로 선언되어 있습니다.
- `test-cases.ts`: 각 값이 기대하는 원시 타입인지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(17,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

각 `TODO` 아래 변수의 `unknown`을 값에 맞는 원시 타입으로 바꿉니다. `TODO 7`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `emptyTitle`(값 `""`)의 타입을 바꿉니다.
2. `TODO 2`: `stock`(값 `NaN`)의 타입을 바꿉니다.
3. `TODO 3`: `shippingFee`(값 `Infinity`)의 타입을 바꿉니다.
4. `TODO 4`: `isDigital`(값 `true`)의 타입을 바꿉니다.
5. `TODO 5`: `lastUpdated`(값 `undefined`)의 타입을 바꿉니다.
6. `TODO 6`: `archivedAt`(값 `null`)의 타입을 바꿉니다.
7. `TODO 7`: `sellerName`(값 `"코드잇 스토어"`)의 타입을 바꿉니다.
8. `TODO 8`: `discountRate`(값 `0`)의 타입을 바꿉니다.
9. `TODO 9`: `hasCoupon`(값 `false`)의 타입을 바꿉니다.
10. `TODO 10`: `deletedAt`(값 `null`)의 타입을 바꿉니다.
11. `TODO 11`: `publishedAt`(값 `undefined`)의 타입을 바꿉니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/08-primitives
```

## 성공 기준

모든 값의 타입이 기대와 일치하면 진단 없이 `PASS: practices/02/08-primitives`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
