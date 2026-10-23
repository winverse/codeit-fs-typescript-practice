# 함수에 타입 정하기 정답과 해설

`template.ts`에서 `TODO` 주석 아래 함수 선언 줄의 `unknown`을 다음처럼 바꿉니다. 정답은 타입을 정한 뒤 필요 없어진 `typeof` 검사도 정리했습니다. 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export function reserveSeat(seatId: string, count: number = 1): boolean {
  return seatId.length > 0 && count > 0;
}

export function printReservation(title?: string): void {
  if (title) {
    console.log(title);
  }
}

export function appendTags(...tags: string[]): number {
  return tags.length;
}

export function createLabel(id: string, prefix: string = "ORD"): string {
  return `${prefix}-${id}`;
}

export function printMessages(title?: string): void {
  if (title) {
    console.log(title);
  }
}

export function addKeywords(...keywords: string[]): string {
  return keywords.join(",");
}
```

## 해설

- `TODO 1`: 좌석 번호는 문자열, 인원은 숫자이므로 `seatId: string`, `count: number = 1`입니다. 본문이 비교 결과(`true` 또는 `false`)를 반환하므로 반환 타입은 `boolean`입니다. 기본값 파라미터는 호출할 때 생략할 수 있으므로 `test-cases.ts`는 이 함수의 타입을 `(seatId: string, count?: number) => boolean`과 비교합니다. 정답은 `seatId`가 문자열로 정해졌으므로 `typeof` 검사 대신 `seatId.length > 0`으로 빈 좌석 번호를 거릅니다.
- `TODO 2`: `title?: string`은 인자를 넘기지 않아도 되고, 넘기면 문자열이어야 한다는 뜻입니다. 반환값이 없으므로 `void`는 그대로 둡니다.
- `TODO 3`: `...tags: string[]`는 여러 문자열 인자를 하나의 배열처럼 받습니다. 본문이 `tags.length`를 반환하므로 반환 타입은 `number`입니다.
- `TODO 4`: `createLabel`도 `TODO 1`처럼 필수 파라미터 `id: string`과 기본값 파라미터 `prefix: string = "ORD"`를 적습니다. 템플릿 리터럴로 만든 문자열을 반환하므로 반환 타입은 `string`입니다.
- `TODO 5`: `TODO 2`와 같이 `title?: string`입니다.
- `TODO 6`: `...keywords: string[]`로 받고, `join(",")`이 문자열을 반환하므로 반환 타입은 `string`입니다.

## 자주 하는 실수

- 기본값 파라미터에 `?`까지 붙여 `count?: number = 1`로 쓰면 `template.ts`의 `reserveSeat` 선언 줄에 `error TS1015: Parameter cannot have question mark and initializer.`가 표시됩니다. 기본값이 있으면 이미 생략할 수 있으므로 `?`를 붙이지 않습니다.
- 레스트 파라미터를 `...tags: string`으로 쓰면 `template.ts`의 `appendTags` 선언 줄에 `error TS2370: A rest parameter must be of an array type.`이 표시됩니다. 레스트 파라미터는 여러 인자를 배열로 받으므로 `string[]`처럼 배열 타입으로 적습니다.
