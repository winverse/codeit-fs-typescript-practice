# 인덱스드 액세스 타입

## 목표

직접 적어 둔 타입을 인덱스드 액세스 타입으로 바꿔, 원본 프로퍼티의 타입을 그대로 가져옵니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-05.인덱스드-액세스-타입`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `ProductId`, `ProductCategory`, `OrderStatus`와 `Order`의 `productId`는 원본 프로퍼티에서 가져온 타입이 아니라 직접 적힌 타입입니다. 네 곳 모두 원본 프로퍼티의 타입과 어긋나 있습니다. 함수 `findProductById`, `filterByCategory`, `changeStatus`는 고치지 않습니다.
- `test-cases.ts`: 네 타입이 원본 프로퍼티의 타입과 같은지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 먼저 `template.ts(17,37): error TS2367: This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.`이 표시됩니다. `string`인 `product.id`와 `number`인 `id`를 비교한다는 뜻입니다. 이어서 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 `error TS2344: Type 'false' does not satisfy the constraint 'true'.` 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 그 파일의 줄과 칸이며, `test-cases.ts` 진단은 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `ProductId`를 `Product`의 `id` 프로퍼티에서 가져온 타입으로 바꿉니다.
2. `TODO 2`: `ProductCategory`를 `Product`의 `category` 프로퍼티에서 가져온 타입으로 바꿉니다.
3. `TODO 3`: `Order`의 `productId`를 `Product`의 `id` 프로퍼티에서 가져온 타입으로 바꿉니다.
4. `TODO 4`: `OrderStatus`를 `Order`의 `status` 프로퍼티에서 가져온 타입으로 바꿉니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-05.인덱스드-액세스-타입
```

## 성공 기준

네 타입이 원본 프로퍼티의 타입과 같으면 진단 없이 `PASS: practices/4-05.인덱스드-액세스-타입`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
