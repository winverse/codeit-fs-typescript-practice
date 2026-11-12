# 유틸리티 타입: Pick·Omit·Record

## 목표

원본 타입에서 필요한 키만 남긴 타입을 `Pick`과 `Omit` 가운데 알맞은 것으로 만들고, 정해진 키마다 같은 종류의 값을 두는 타입을 `Record`로 만듭니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-13.유틸리티-타입-Pick·Omit·Record`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `MemberCard`, `MemberProfile`, `StatusLabels`, `DiscountRates`가 `any`입니다. `Member` Interface, `OrderStatus`, `MemberGrade`와 함수, 값은 고치지 않습니다.
- `test-cases.ts`: 네 타입이 기대한 결과 타입과 같은지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(10,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 4`는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `MemberCard`가 `id`와 `nickname`만 갖도록 `Member`에 유틸리티 타입을 씁니다.
2. `TODO 2`: `MemberProfile`이 `id`, `nickname`, `email`, `phone`만 갖도록 `Member`에 유틸리티 타입을 씁니다.
3. `TODO 3`: `StatusLabels`가 `OrderStatus`의 상태마다 화면에 보일 문구(`string`)를 갖도록 유틸리티 타입을 씁니다.
4. `TODO 4`: `DiscountRates`가 `MemberGrade`의 등급마다 할인율(`number`)을 갖도록 유틸리티 타입을 씁니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-13.유틸리티-타입-Pick·Omit·Record
```

## 성공 기준

네 타입이 기대한 결과 타입과 같으면 진단 없이 `PASS: practices/4-13.유틸리티-타입-Pick·Omit·Record`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
