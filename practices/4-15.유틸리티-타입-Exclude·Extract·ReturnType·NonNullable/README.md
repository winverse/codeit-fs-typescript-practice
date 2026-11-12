# 유틸리티 타입: Exclude·Extract·ReturnType·NonNullable

## 목표

Union에서 구성원을 빼거나 남기고, 함수의 반환 타입을 가져오고, `null`과 `undefined`를 뺀 타입을 유틸리티 타입으로 만듭니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-15.유틸리티-타입-Exclude·Extract·ReturnType·NonNullable`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `ActiveStatus`, `OrderEvent`, `Order`, `CouponCode`가 `any`입니다. `OrderStatus`, `ShopEvent`, `MaybeCouponCode`와 함수, 값은 고치지 않습니다.
- `test-cases.ts`: 네 타입이 기대한 결과 타입과 같은지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(10,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `ActiveStatus`가 `"pending" | "paid" | "shipped"`가 되도록 `OrderStatus`에 유틸리티 타입을 씁니다.
2. `TODO 2`: `OrderEvent`가 `type`이 `"order"`, `"refund"`인 두 구성원의 Union이 되도록 `ShopEvent`에 유틸리티 타입을 씁니다.
3. `TODO 3`: `Order`가 `createOrder` 함수의 반환 타입이 되도록 유틸리티 타입을 씁니다.
4. `TODO 4`: `CouponCode`가 `null`과 `undefined`가 없는 타입이 되도록 `MaybeCouponCode`에 유틸리티 타입을 씁니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-15.유틸리티-타입-Exclude·Extract·ReturnType·NonNullable
```

## 성공 기준

네 타입이 기대한 결과 타입과 같으면 진단 없이 `PASS: practices/4-15.유틸리티-타입-Exclude·Extract·ReturnType·NonNullable`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
