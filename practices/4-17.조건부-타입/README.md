# 조건부 타입

## 목표

조건부 타입으로 넘긴 타입에 따라 결과 타입을 고르고, Union을 넘겨 구성원마다 조건을 적용해 구성원을 거릅니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-17.조건부-타입`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `InputType`, `TextOnly`, `Purchasable`이 `any`라 무엇을 넘겨도 결과가 `any`입니다. 이 타입을 쓰는 `PriceInput`, `NameInput`, `ClothingSize`, `PurchasableStatus`와 `Product`, `ProductSize`, `StockStatus`는 고치지 않습니다.
- `test-cases.ts`: 조건부 타입의 결과를 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(12,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`은 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `InputType<T>`를 조건부 타입으로 바꿉니다. `T`를 `number`에 할당할 수 있으면 `"number"`, 아니면 `"text"`가 됩니다.
2. `TODO 2`: `TextOnly<T>`를 `T`의 구성원 가운데 `string`에 할당할 수 있는 것만 남기는 조건부 타입으로 바꿉니다.
3. `TODO 3`: `Purchasable<T>`를 `T`의 구성원 가운데 `"soldOut"`에 할당할 수 있는 것을 빼는 조건부 타입으로 바꿉니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-17.조건부-타입
```

## 성공 기준

조건부 타입의 결과가 기대와 같으면 진단 없이 `PASS: practices/4-17.조건부-타입`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
