export interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

export interface Member {
  id: number;
  nickname: string;
  point: number;
}

export const product: Product = {
  id: "p001",
  name: "무선 키보드",
  price: 39_000,
  inStock: true,
};

export const products: Product[] = [
  product,
  { id: "p002", name: "무선 마우스", price: 19_000, inStock: false },
];

export const member: Member = {
  id: 1,
  nickname: "코드잇",
  point: 1_200,
};

// TODO 1: 타입 파라미터 T와 K를 추가해, 넘긴 키의 프로퍼티 타입을 반환하게 바꾸세요.
export function getProperty(object: any, key: string): any {
  return object[key];
}

// TODO 2: 타입 파라미터 T와 K를 추가해, 넘긴 키의 프로퍼티 타입을 요소로 하는 배열을 반환하게 바꾸세요.
export function getValues(items: any[], key: string): any[] {
  return items.map((item) => item[key]);
}

// 추가 문제
// TODO 3: 타입 파라미터 K를 추가해, 넘긴 키의 프로퍼티 타입을 반환하게 바꾸세요.
export function getMemberValue(target: Member, key: keyof Member) {
  return target[key];
}
