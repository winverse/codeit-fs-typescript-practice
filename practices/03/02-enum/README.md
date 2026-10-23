# Enum

## 목표

정해진 값 목록을 문자열 Enum으로 표현합니다.

## 시작하기

`codeit-fs-typescript-basic-practice` 폴더의 `practices/03/02-enum`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: Enum 멤버 이름은 맞지만 멤버의 문자열 값이 기대와 다릅니다. `productSize`, `moveDirection`, `printSize`, `formatDirection`은 이미 각 Enum 타입을 쓰고 있으므로 고치지 않습니다.
- `test-cases.ts`: 멤버 이름, 문자열 값, 변수와 함수의 시그니처를 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(20,44): error TS2322: Type 'Size.S' is not assignable to type '"S"'.`처럼 문자열 값이 기대와 다른 Enum 멤버마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 진단의 `"S"`가 그 멤버에 기대하는 문자열 값입니다.

## 구현 내용

`TODO 2`는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `Size`의 문자열 값을 각각 `"S"`, `"M"`, `"L"`, `"XL"`로 바꿉니다.
2. `TODO 2`: `Direction`의 문자열 값을 각각 `"UP"`, `"DOWN"`, `"LEFT"`, `"RIGHT"`로 바꿉니다.

## 확인하기

`codeit-fs-typescript-basic-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/03/02-enum
```

## 성공 기준

모든 문자열 값과 시그니처가 맞으면 진단 없이 `PASS: practices/03/02-enum`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
