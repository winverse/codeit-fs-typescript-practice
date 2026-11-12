export interface Product {
  id: string;
  name: string;
  price: number;
}

// TODO 1: Product의 모든 프로퍼티를 원래 타입 그대로 선택 프로퍼티로 바꾼 맵드 타입으로 바꾸세요.
export type ProductUpdate = any;
// TODO 2: Product의 키는 그대로 두고 모든 값을 string으로 바꾼 맵드 타입으로 바꾸세요.
export type ProductFormValues = any;

export const priceUpdate: ProductUpdate = { price: 35_000 };
export const formValues: ProductFormValues = {
  id: "p001",
  name: "무선 키보드",
  price: "39000",
};

// 추가 문제
export interface Member {
  readonly id: number;
  email: string;
  nickname?: string;
}

// TODO 3: Member의 선택 프로퍼티를 필수로 바꾸고 readonly는 그대로 둔 맵드 타입으로 바꾸세요.
export type RequiredMember = any;
// TODO 4: Member의 readonly와 ?를 모두 없앤 맵드 타입으로 바꾸세요.
export type EditableMember = any;

export const editableMember: EditableMember = {
  id: 1,
  email: "kim@email.com",
  nickname: "코드잇",
};

editableMember.id = 2;
