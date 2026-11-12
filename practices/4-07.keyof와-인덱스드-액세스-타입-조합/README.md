# keyof와 인덱스드 액세스 타입 조합

## 목표

`keyof`로 제한한 타입 파라미터와 인덱스드 액세스 타입을 함께 써서, 넘긴 키의 프로퍼티 타입을 반환하는 함수를 만듭니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-07.keyof와-인덱스드-액세스-타입-조합`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `getProperty`와 `getValues`는 파라미터와 반환 타입이 `any`라 어떤 키를 넘겨도 결과가 `any`입니다. `getMemberValue`는 키를 `keyof Member`로만 받아, 반환 타입이 모든 프로퍼티 타입을 합친 Union입니다. `Product`, `Member` Interface와 `product`, `products`, `member` 값은 고치지 않습니다.
- `test-cases.ts`: 키를 넘겨 받은 값의 타입이 그 키의 프로퍼티 타입인지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(20,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `getProperty`에 타입 파라미터 `T`와 `K`를 추가해, 넘긴 키의 프로퍼티 타입을 반환하게 바꿉니다.
2. `TODO 2`: `getValues`에 타입 파라미터 `T`와 `K`를 추가해, 넘긴 키의 프로퍼티 타입을 요소로 하는 배열을 반환하게 바꿉니다.
3. `TODO 3`: `getMemberValue`에 타입 파라미터 `K`를 추가해, 넘긴 키의 프로퍼티 타입을 반환하게 바꿉니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-07.keyof와-인덱스드-액세스-타입-조합
```

## 성공 기준

넘긴 키의 프로퍼티 타입이 결과 타입이 되면 진단 없이 `PASS: practices/4-07.keyof와-인덱스드-액세스-타입-조합`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
