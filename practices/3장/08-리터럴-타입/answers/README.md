# 리터럴 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 줄을 다음처럼 바꿉니다. `currentNotice`, `currentStep`과 함수 본문은 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export const pinnedNotice = "공지";

export function printPinnedNotice(notice: "공지") {
  return notice;
}

export const freeShipping = true;

export function acceptFirstStep(step: 1) {
  return step;
}
```

## 해설

`let`으로 선언한 원시값은 나중에 다른 값으로 바뀔 수 있으므로 `string`, `number`, `boolean` 같은 넓은 타입으로 추론되고, `const`로 선언한 원시값은 다시 할당할 수 없으므로 그 값 하나만 허용하는 리터럴 타입으로 추론됩니다.

- `TODO 1`: `pinnedNotice`를 `const`로 바꾸면 타입이 `"공지"` 리터럴 타입으로 추론됩니다. `export let pinnedNotice: "공지" = "공지";`처럼 리터럴 타입을 직접 적어도 확인 명령은 통과합니다.
- `TODO 2`: 파라미터를 `notice: "공지"`로 선언하면 `"공지"`만 받을 수 있습니다. 본문이 받은 `notice`를 그대로 반환하므로 반환 타입도 `"공지"`로 추론되어, 반환 타입을 따로 적지 않아도 됩니다.
- `TODO 3`: `freeShipping`도 `const`로 바꾸면 `true` 리터럴 타입이 됩니다.
- `TODO 4`: `step: 1`로 선언하면 숫자 중에서도 `1`만 받고, 같은 값을 반환하므로 반환 타입도 `1`입니다.

`currentNotice`와 `currentStep`은 `let`으로 남겨 두어 `string`, `number`로 추론되게 합니다. 이 둘까지 `const`로 바꾸면 리터럴 타입이 되어 `test-cases.ts`의 넓은 타입 검사가 실패합니다.

## 자주 하는 실수

- `pinnedNotice`를 `let`으로 둔 채 다른 `TODO`만 풀면 `test-cases.ts(12,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다. 값이 지금 `"공지"`여도 `let`이면 타입은 `string`으로 넓어집니다.
- `printPinnedNotice(notice: "공지"): string`처럼 반환 타입을 `string`으로 적으면 반환 타입이 넓어져 `test-cases.ts(14,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다.
