# TypeScript 기본 연습문제

`TypeScript 기본` 강의의 연습문제 12개를 담은 저장소입니다. 각 문제의 코드에는 타입이 비어 있거나 기대와 다르게 적힌 자리가 `TODO`로 남아 있고, 그 자리를 강의에서 배운 대로 고쳐 타입 검사를 통과시키는 것이 목표입니다. 문제끼리는 서로 이어지지 않으므로 교재가 안내하는 순서대로 하나씩 독립적으로 풉니다.

| 폴더                                 | 완성할 내용                                |
| ------------------------------------ | ------------------------------------------ |
| `practices/02/04-type-annotation`    | 나중에 값이 할당되는 변수의 타입 직접 선언 |
| `practices/02/07-primitives`         | 값에 맞는 원시 타입                        |
| `practices/02/10-arrays-tuples`      | 배열과 `readonly` 튜플                     |
| `practices/02/13-object-types`       | 필수·선택 프로퍼티와 인덱스 시그니처       |
| `practices/02/17-function-types`     | 파라미터·반환·선택·레스트 파라미터 타입    |
| `practices/03/02-enum`               | 문자열 Enum의 값                           |
| `practices/04/02-interface`          | Interface 프로퍼티와 확장                  |
| `practices/05/02-literal-types`      | 리터럴 타입과 넓은 타입                    |
| `practices/05/07-union-types`        | 객체 타입 Union과 리터럴 Union             |
| `practices/05/10-intersection-types` | Intersection으로 타입 조합                 |
| `practices/05/15-keyof-typeof`       | `typeof`로 가져온 타입과 `keyof` 키 Union  |
| `practices/06/02-generics`           | 제네릭 함수와 제네릭 Interface             |

## 처음 한 번 준비하기

이 README가 있는 `codeit-fs-typescript-basic-practice` 폴더(저장소 루트)에서 의존성을 설치하고 시작 상태를 확인합니다. 이 README의 모든 명령은 이 폴더에서 실행합니다.

```bash
pnpm install
pnpm run check:starts
```

마지막 줄에 `start checks: 12/12`가 표시되면 12개 문제가 모두 풀이 전 상태로 준비된 것입니다. 풀이 전 문제는 일부러 타입 검사에 실패하도록 만들어져 있고, 이 명령은 12개 문제가 모두 그렇게 실패하는지 확인합니다.

## 문제 폴더 구성

문제 폴더마다 다음 파일이 있습니다.

- `README.md`: 그 문제의 목표, 시작 상태, `TODO` 번호별 구현 내용, 확인 명령, 성공 기준
- `template.ts`: 직접 고치는 파일입니다. 고칠 자리에는 `// TODO 1:`처럼 번호가 붙은 주석이 있고, `// 추가 문제` 아래 `TODO`까지 확인 명령이 함께 검사합니다.
- `test-cases.ts`: `template.ts`의 타입이 기대와 같은지 검사하는 읽기 전용 파일입니다. 고치지 않습니다.
- `answers/`: 정답 `template.ts`와 해설 `README.md`가 있습니다. 문제를 푼 뒤에만 엽니다.

문제 폴더 밖의 `scripts/`, `_helpers/`, `practice-paths.json`, `package.json`, `tsconfig.json`은 확인 명령을 위해 제공한 파일이므로 고치지 않습니다.

## 문제 풀기

1. 교재가 안내하는 문제 폴더의 `README.md`를 읽습니다.
2. `template.ts`에서 `TODO` 번호 순서대로 타입을 고칩니다.
3. 저장소 루트에서 확인 명령을 실행합니다. 예를 들어 첫 문제는 다음 명령으로 확인합니다.

   ```bash
   pnpm run check -- practices/02/04-type-annotation
   ```

   모든 타입이 맞으면 `PASS: practices/02/04-type-annotation`이 표시됩니다. 타입이 맞지 않으면 진단과 함께 마지막 줄에 `[ELIFECYCLE] Command failed with exit code 1.`이 표시됩니다.

4. 통과한 뒤 `answers/template.ts`, `answers/README.md`와 비교합니다.
