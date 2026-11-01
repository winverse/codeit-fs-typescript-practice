# Intersection 타입

## 목표

여러 객체 타입의 조건을 하나의 타입으로 조합합니다.

## 시작하기

`codeit-fs-typescript-practice` 폴더의 `practices/05/10-intersection-types`에서 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 조합에 쓸 조각 타입(`Id`, `Timestamp`)은 프로퍼티가 없는 빈 Interface, 조합한 타입(`Product`, `User`)은 `any`여서 객체가 충족해야 할 조건이 사라진 상태입니다.
- `test-cases.ts`: 공통 타입을 Intersection 타입으로 조합했는지와 각 프로퍼티 타입을 검사하는 파일이며 고치지 않습니다.

수정 전에 확인 명령을 실행하면 `test-cases.ts(14,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`처럼 `test-cases.ts`에서 기대와 다른 타입을 검사하는 줄마다 진단이 표시되고, 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다. 괄호 안 숫자는 `test-cases.ts`의 줄과 칸이며, 그 줄 `Equal<…, …>`의 앞쪽(지금 코드의 타입)이 뒤쪽(기대하는 타입)과 같지 않다는 뜻입니다.

## 구현 내용

`TODO 5`부터는 `// 추가 문제` 아래에 있으며, 확인 명령은 추가 문제까지 함께 검사합니다.

1. `TODO 1`: `Id` Interface에 `id` 문자열 프로퍼티를 추가합니다.
2. `TODO 2`: `Timestamp` Interface에 `createdAt`과 `updatedAt` `Date` 프로퍼티를 추가합니다.
3. `TODO 3`: `Id`를 사용해 `Product`를 `Id`와 상품 고유 프로퍼티(`name`, `price`)의 Intersection 타입으로 만듭니다.
4. `TODO 4`: `Id`, `Timestamp`를 사용해 `User`를 `Id`, `Timestamp`, 사용자 고유 프로퍼티(`username`, `email`)의 Intersection 타입으로 만듭니다.
5. `TODO 5`: `Attacker`의 수치 프로퍼티 `attackPower`를 숫자 타입으로 바꿉니다.
6. `TODO 6`: `Defender`의 수치 프로퍼티 `defensePower`를 숫자 타입으로 바꿉니다.
7. `TODO 7`: `BattleCharacter`를 공격·방어 계약(`Attacker`, `Defender`)과 이름 프로퍼티의 Intersection 타입으로 만듭니다.

## 확인하기

`codeit-fs-typescript-practice` 폴더에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/05/10-intersection-types
```

## 성공 기준

모든 Intersection 타입과 프로퍼티가 기대와 일치하면 진단 없이 `PASS: practices/05/10-intersection-types`가 표시됩니다.

## 정답과 비교하기

직접 풀고 확인한 뒤 `answers/template.ts`와 비교합니다. 해설과 자주 하는 실수는 `answers/README.md`에 있습니다.
