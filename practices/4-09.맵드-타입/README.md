# 맵드 타입

## 목표

맵드 타입으로 `Product`와 `Member`의 모든 프로퍼티를 같은 규칙으로 바꾼 새 타입을 만듭니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/4-09.맵드-타입`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: `ProductUpdate`, `ProductFormValues`, `RequiredMember`, `EditableMember`가 `any`라 원본 타입의 키와 수식어를 따르지 않습니다. `Product`, `Member` Interface와 그 아래 값은 고치지 않습니다.
- `test-cases.ts`: 네 타입의 키, 값 타입, `?`·`readonly` 수식어를 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(10,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 3`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `ProductUpdate`를 `Product`의 모든 프로퍼티가 원래 타입 그대로 선택 프로퍼티인 맵드 타입으로 만듭니다.
2. `TODO 2`: `ProductFormValues`를 키는 `Product`와 같고 값은 모두 `string`인 맵드 타입으로 만듭니다.
3. `TODO 3`: `RequiredMember`를 `Member`의 선택 프로퍼티를 필수로 바꾸고 `readonly`는 그대로 둔 맵드 타입으로 만듭니다.
4. `TODO 4`: `EditableMember`를 `Member`에서 `readonly`와 `?`를 모두 없앤 맵드 타입으로 만듭니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm check -- practices/4-09.맵드-타입
```

## 성공 기준

네 타입의 키, 값 타입, 수식어가 기대와 같으면 진단 없이 `PASS: practices/4-09.맵드-타입`이 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
