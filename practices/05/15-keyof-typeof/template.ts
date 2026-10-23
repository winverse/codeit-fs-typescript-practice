export const book = {
  id: "b001",
  title: "타입 시스템 입문",
  price: 18_000,
  inStock: true,
};

// TODO 1: book 값에서 가져온 타입으로 바꾸세요.
export type BookFromValue = any;
// TODO 2: BookFromValue의 키 Union 타입으로 바꾸세요.
export type BookKey = any;

export const bookKeys: BookKey[] = ["id", "title", "price", "inStock"];

export function readBookValue(item: BookFromValue, key: BookKey) {
  return item[key];
}

// 추가 문제
export const filter = {
  sort: "latest",
  page: 1,
  onlyMembers: false,
};

// TODO 3: filter 값에서 가져온 타입으로 바꾸세요.
export type FilterFromValue = any;
// TODO 4: FilterFromValue의 키 Union 타입으로 바꾸세요.
export type FilterKey = any;

export const filterKeys: FilterKey[] = ["sort", "page", "onlyMembers"];

export function readFilterValue(item: FilterFromValue, key: FilterKey) {
  return item[key];
}
