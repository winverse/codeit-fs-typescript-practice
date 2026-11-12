# 유틸리티 타입: Partial·Required·Readonly

## 목표

프로퍼티를 선택·필수·읽기 전용으로 바꾼 타입이 필요한 자리에 `Partial`, `Required`, `Readonly` 가운데 알맞은 것을 골라 씁니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-11.유틸리티-타입-Partial·Required·Readonly`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `ReviewEdit`, `ResolvedSearchOptions`, `IssuedReceipt`, `FrozenSearchOptions`가 `any`입니다. `Review`, `SearchOptions`, `Receipt` Interface와 함수, 값은 고치지 않습니다.
- `test-cases.ts`: 네 타입의 프로퍼티와 `?`·`readonly` 수식어를 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(10,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `editReview`가 바꿀 프로퍼티만 담은 객체도 받도록 `ReviewEdit`에 `Review`의 유틸리티 타입을 씁니다.
2. `TODO 2`: `ResolvedSearchOptions`가 모든 프로퍼티를 빠짐없이 갖도록 `SearchOptions`에 유틸리티 타입을 씁니다.
3. `TODO 3`: `IssuedReceipt`의 프로퍼티에 다시 할당할 수 없도록 `Receipt`에 유틸리티 타입을 씁니다.
4. `TODO 4`: `FrozenSearchOptions`가 모든 프로퍼티를 빠짐없이 갖고 다시 할당할 수도 없도록 `SearchOptions`에 유틸리티 타입을 씁니다. 한 유틸리티 타입의 결과를 다른 유틸리티 타입에 넘깁니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-11.유틸리티-타입-Partial·Required·Readonly
```

## 성공 기준

네 타입의 프로퍼티와 수식어가 기대와 같으면 진단 없이 `PASS: practices/4-11.유틸리티-타입-Partial·Required·Readonly`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
