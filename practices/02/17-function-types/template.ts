// TODO 1: 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function reserveSeat(seatId: unknown, count: unknown = 1): unknown {
  return typeof seatId === "string" && typeof count === "number" && count > 0;
}

// TODO 2: 선택 파라미터를 문자열 타입으로 바꾸세요.
export function printReservation(title?: unknown): void {
  if (typeof title === "string") {
    console.log(title);
  }
}

// TODO 3: 레스트 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function appendTags(...tags: unknown[]): unknown {
  return tags.length;
}

// 추가 문제
// TODO 4: 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function createLabel(id: unknown, prefix: unknown = "ORD"): unknown {
  if (typeof id === "string" && typeof prefix === "string") {
    return `${prefix}-${id}`;
  }

  return "";
}

// TODO 5: 선택 파라미터를 문자열 타입으로 바꾸세요.
export function printMessages(title?: unknown): void {
  if (typeof title === "string") {
    console.log(title);
  }
}

// TODO 6: 레스트 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function addKeywords(...keywords: unknown[]): unknown {
  return keywords.join(",");
}
