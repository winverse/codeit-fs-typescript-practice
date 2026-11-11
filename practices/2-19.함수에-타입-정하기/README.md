# 함수에 타입 정하기

## 목표

파라미터, 반환값, 선택·레스트 파라미터의 타입을 지정합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/2-19.함수에-타입-정하기`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 함수의 파라미터와 반환 타입이 `any`로 선언되어 있어 어떤 값이든 받고 반환할 수 있으며, 반환값이 없는 `printReservation`과 `printMessages`만 반환 타입이 `void`입니다. 함수 본문은 고치지 않습니다.
- `test-cases.ts`: 일반·기본값·선택·레스트 파라미터와 반환 타입을 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(13,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 4`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `reserveSeat`의 필수 파라미터 `seatId`, 기본값 파라미터 `count`, 반환 타입을 실제 구현과 맞춥니다.
2. `TODO 2`: `printReservation`의 선택 파라미터 `title`을 문자열로 지정합니다.
3. `TODO 3`: `appendTags`의 레스트 파라미터 `tags`를 문자열 배열로 지정하고, 반환 타입을 실제 구현과 맞춥니다.
4. `TODO 4`: `createLabel`의 필수 파라미터 `id`, 기본값 파라미터 `prefix`, 반환 타입을 실제 구현과 맞춥니다.
5. `TODO 5`: `printMessages`의 선택 파라미터 `title`을 문자열로 지정합니다.
6. `TODO 6`: `addKeywords`의 레스트 파라미터 `keywords`를 문자열 배열로 지정하고, 반환 타입을 실제 구현과 맞춥니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/2-19.함수에-타입-정하기
```

## 성공 기준

여섯 함수의 시그니처가 기대와 일치하면 진단 없이 `PASS: practices/2-19.함수에-타입-정하기`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
