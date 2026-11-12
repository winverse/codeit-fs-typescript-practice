export interface Product {
  id: string;
  name: string;
  price: number;
}

export type ProductUpdate = {
  [K in keyof Product]?: Product[K];
};
export type ProductFormValues = {
  [K in keyof Product]: string;
};

export const priceUpdate: ProductUpdate = { price: 35_000 };
export const formValues: ProductFormValues = {
  id: "p001",
  name: "무선 키보드",
  price: "39000",
};

// 추가 문제 해답
export interface Member {
  readonly id: number;
  email: string;
  nickname?: string;
}

export type RequiredMember = {
  [K in keyof Member]-?: Member[K];
};
export type EditableMember = {
  -readonly [K in keyof Member]-?: Member[K];
};

export const editableMember: EditableMember = {
  id: 1,
  email: "kim@email.com",
  nickname: "코드잇",
};

editableMember.id = 2;
