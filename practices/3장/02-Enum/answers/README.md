# Enum 정답과 해설

`template.ts`에서 `TODO` 주석 아래 두 Enum의 문자열 값을 다음처럼 바꿉니다. 멤버 이름과 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

## 해설

문자열 Enum은 `S = "S"`처럼 멤버 이름 오른쪽에 그 멤버의 실제 값을 적습니다. 코드에서는 `Size.M`처럼 멤버 이름으로 선택하고, 실행할 때 쓰이는 값은 오른쪽 문자열입니다. `test-cases.ts`는 멤버 이름과 문자열 값을 따로 검사하므로 둘 다 계약과 같아야 합니다.

- `TODO 1`: 시작 상태의 `Size`는 이름이 `S`, `M`, `L`, `XL`이지만 값이 `"Small"`, `"Medium"`, `"Large"`, `"Extra Large"`입니다. 이름은 그대로 두고 값만 `"S"`, `"M"`, `"L"`, `"XL"`로 바꿉니다.
- `TODO 2`: `Direction`은 멤버 이름을 `Up`, `Down`, `Left`, `Right`로 두고 값만 `"UP"`, `"DOWN"`, `"LEFT"`, `"RIGHT"`로 바꿉니다. 멤버 이름과 값의 표기가 달라도 되며, 이 실습의 계약은 이름은 그대로, 값은 대문자입니다.

## 자주 하는 실수

- 값을 멤버 이름과 같게 `Up = "Up"`으로 쓰면 `test-cases.ts(22,3): error TS2322: Type 'Direction.Up' is not assignable to type '"UP"'.`가 표시됩니다. 값은 `"UP"`이어야 합니다.
- 값 대신 멤버 이름을 `UP = "UP"`으로 바꾸면 첫 진단으로 `test-cases.ts(15,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시되고, 이어서 `Property 'Up' does not exist on type 'typeof Direction'. Did you mean 'UP'?` 진단이 나옵니다. 멤버 이름은 바꾸지 않습니다.
