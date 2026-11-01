# 제네릭

## 목표

함수와 Interface의 `any` 자리를 타입 파라미터로 바꿔, 사용할 때 정한 타입이 반환값과 프로퍼티에 유지되도록 합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/06/02-generics`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 함수와 `ApiEnvelope<T>`·`Box<T>` Interface 안이 `any`로 적혀 있어, 사용할 때 정한 타입이 반환값과 프로퍼티에 유지되지 않습니다.
- `test-cases.ts`: 숫자와 문자열을 각각 넣었을 때 그 타입이 반환값과 프로퍼티에 유지되는지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(21,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 4`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `wrapInArray`에 타입 파라미터를 추가해 입력 타입을 반환하는 배열의 요소 타입으로 유지합니다.
2. `TODO 2`: `getFirstValue`에 타입 파라미터를 추가해 배열 요소 타입을 반환 타입에 연결합니다. 빈 배열이면 첫 값이 없으므로 반환 타입에 `undefined` 가능성을 남깁니다.
3. `TODO 3`: `ApiEnvelope<T>`의 `data`가 타입 파라미터 `T`를 사용하게 바꿉니다.
4. `TODO 4`: `Box<T>`의 `value`가 타입 파라미터 `T`를 사용하게 바꿉니다.
5. `TODO 5`: `pickLast`에 타입 파라미터를 추가해 배열 요소 타입을 반환 타입에 연결합니다. 빈 배열이면 마지막 값이 없으므로 반환 타입에 `undefined` 가능성을 남깁니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/06/02-generics
```

## 성공 기준

숫자·문자열을 넣은 경우의 타입이 각각 유지되면 진단 없이 `PASS: practices/06/02-generics`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
