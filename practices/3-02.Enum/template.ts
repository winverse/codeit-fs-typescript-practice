// TODO 1: 각 멤버의 문자열 값을 S, M, L, XL로 바꾸세요.
export enum Size {
  S = "Small",
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
