# 리터럴 타입

## 목표

리터럴 타입과 `string`, `number` 같은 넓은 타입의 차이를 확인합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/3-08.리터럴-타입`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 모든 값이 일반 `let`과 넓은 파라미터 타입으로 선언되어 있어 고정해야 할 리터럴까지 넓게 추론됩니다. `currentNotice`와 `currentStep`은 나중에 다른 값도 받을 수 있도록 `string`, `number`를 유지해야 하므로 고치지 않습니다.
- `test-cases.ts`: 고정할 값은 리터럴 타입으로, 바뀔 값은 넓은 원시 타입으로 남았는지 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(12,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `pinnedNotice`를 다시 할당할 수 없는 변수로 바꿔 현재 값 `"공지"`만 허용하는 리터럴 타입으로 추론되게 합니다.
2. `TODO 2`: `printPinnedNotice`의 파라미터 `notice`가 `"공지"` 리터럴만 받게 선언합니다.
3. `TODO 3`: `freeShipping`을 다시 할당할 수 없는 변수로 바꿔 현재 값 `true`만 허용하는 리터럴 타입으로 추론되게 합니다.
4. `TODO 4`: `acceptFirstStep`의 파라미터 `step`이 `1` 리터럴만 받게 선언합니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/3-08.리터럴-타입
```

## 성공 기준

리터럴 타입과 넓은 타입이 기대와 일치하면 진단 없이 `PASS: practices/3-08.리터럴-타입`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
