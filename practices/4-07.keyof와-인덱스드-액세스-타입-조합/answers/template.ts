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

export function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

export function getValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

// 추가 문제 해답
export function getMemberValue<K extends keyof Member>(
  target: Member,
  key: K,
): Member[K] {
  return target[key];
}
