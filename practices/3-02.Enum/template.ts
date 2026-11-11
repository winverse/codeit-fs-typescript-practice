export enum Size {
  // 예시(TODO 1): 값이 "Small"일 때는 test-cases.ts 20번 줄의 Size.S에 TS2322 진단이 나왔습니다.
  // 값을 멤버 이름과 같은 "S"로 바꿨습니다.
  S = "S",
  // TODO 1: 나머지 멤버의 문자열 값을 M, L, XL로 바꾸세요.
  M = "Medium",
  L = "Large",
  XL = "Extra Large",
}

export const productSize: Size = Size.M;

export function printSize(size: Size): string {
  return `사이즈: ${size}`;
}

// 추가 문제
// TODO 2: 각 멤버의 문자열 값을 UP, DOWN, LEFT, RIGHT로 바꾸세요.
export enum Direction {
  Up = "U",
  Down = "D",
  Left = "L",
  Right = "R",
}

export const moveDirection: Direction = Direction.Left;

export function formatDirection(direction: Direction): string {
  return `이동 방향: ${direction}`;
}
