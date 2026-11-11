// TODO 1: 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function reserveSeat(seatId: any, count: any = 1): any {
  return seatId.length > 0 && count > 0;
}

// TODO 2: 선택 파라미터를 문자열 타입으로 바꾸세요.
export function printReservation(title?: any): void {
  if (title) {
    console.log(title);
  }
}

// TODO 3: 레스트 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function appendTags(...tags: any[]): any {
  return tags.length;
}

// 추가 문제
// TODO 4: 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function createLabel(id: any, prefix: any = "ORD"): any {
  return `${prefix}-${id}`;
}

// TODO 5: 선택 파라미터를 문자열 타입으로 바꾸세요.
export function printMessages(title?: any): void {
  if (title) {
    console.log(title);
  }
}

// TODO 6: 레스트 파라미터와 반환값을 구현에 맞는 타입으로 바꾸세요.
export function addKeywords(...keywords: any[]): any {
  return keywords.join(",");
}
