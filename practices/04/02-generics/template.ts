// TODO 1: 입력 타입을 배열 요소 타입으로 유지하는 제네릭 함수로 바꾸세요.
export function wrapInArray(value: any): any[] {
  return [value];
}

// TODO 2: 배열 요소 타입을 반환값에 유지하는 제네릭 함수로 바꾸세요.
export function getFirstValue(items: any[]): any {
  return items[0];
}

export interface ApiEnvelope<T> {
  // TODO 3: data가 타입 파라미터 T를 사용하게 바꾸세요.
  data: any;
  status: number;
}

export const numberEnvelope: ApiEnvelope<number> = {
  data: 1,
  status: 200,
};

export const stringEnvelope: ApiEnvelope<string> = {
  data: "done",
  status: 200,
};

// 추가 문제
export interface Box<T> {
  // TODO 4: value가 타입 파라미터 T를 사용하게 바꾸세요.
  value: any;
  createdAt: string;
}

// TODO 5: 배열 요소 타입을 반환값에 유지하는 제네릭 함수로 바꾸세요.
export function pickLast(items: any[]): any {
  return items[items.length - 1];
}

export const stringBox: Box<string> = {
  value: "done",
  createdAt: "2026-03-12",
};

export const numberBox: Box<number> = {
  value: 3,
  createdAt: "2026-03-12",
};
