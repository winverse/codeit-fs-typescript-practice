# keyof와 typeof 연산자

## 목표

값에서 타입을 가져오고 객체 타입에서 키 이름의 Union 타입을 추출합니다.

## 시작하기

`codeit-fs-typescript-basic-practice` 폴더의 `practices/05/15-keyof-typeof`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 값에서 가져올 타입과 키 타입이 `any`라 잘못된 키도 제한하지 못합니다. 키 배열(`bookKeys`, `filterKeys`)과 두 읽기 함수는 새 타입을 그대로 사용하므로 고치지 않습니다.
- `test-cases.ts`: `typeof`로 가져온 객체 타입, `keyof`로 만든 키 이름의 Union 타입, 두 읽기 함수의 반환 타입을 검사하는 읽기 전용 파일입니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(18,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `BookFromValue`를 `book` 값에서 가져온 타입으로 만듭니다.
2. `TODO 2`: `BookKey`를 `BookFromValue`의 키 Union 타입으로 만듭니다.
3. `TODO 3`: `FilterFromValue`를 `filter` 값에서 같은 방식으로 가져온 타입으로 만듭니다.
4. `TODO 4`: `FilterKey`를 `FilterFromValue`의 키 Union 타입으로 만듭니다.

## 확인하기

`codeit-fs-typescript-basic-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/05/15-keyof-typeof
```

## 성공 기준

값에서 가져온 타입, 키 이름의 Union 타입, 읽기 함수의 반환 타입이 기대와 일치하면 진단 없이 `PASS: practices/05/15-keyof-typeof`가 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
