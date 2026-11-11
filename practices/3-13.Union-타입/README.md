# Union 타입

## 목표

여러 후보 타입과 허용 가능한 리터럴 값의 집합을 표현합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/3-13.Union-타입`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 예시로 풀어 둔 `FeaturedProduct`를 빼면 세 타입 별칭이 `any`라 허용할 후보를 제한하지 못합니다.
- `test-cases.ts`: 객체 타입의 Union과 리터럴의 Union이 정확한 구성원을 갖는지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(25,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 1`은 `// 예시(TODO 1):` 주석과 함께 풀어 둔 예시이므로 `TODO 2`부터 풉니다. `TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`(예시): `FeaturedProduct`를 의류 상품 `ClothingProduct`와 신발 상품 `ShoeProduct`의 Union 타입으로 만들었습니다.
2. `TODO 2`: `ClothingSizeOption`을 `"S"`, `"M"`, `"L"`, `"XL"`의 Union 타입으로 만듭니다.
3. `TODO 3`: `Benefit`을 쿠폰 `DiscountCoupon`과 기프트카드 `GiftCard`의 Union 타입으로 만듭니다.
4. `TODO 4`: `BenefitState`를 `"ready"`, `"active"`, `"expired"`의 Union 타입으로 만듭니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/3-13.Union-타입
```

## 성공 기준

네 Union 타입이 기대와 일치하면 진단 없이 `PASS: practices/3-13.Union-타입`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
