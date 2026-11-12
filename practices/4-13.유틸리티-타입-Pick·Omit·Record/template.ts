export interface Member {
  id: number;
  nickname: string;
  email: string;
  phone: string;
  password: string;
}

// TODO 1: MemberCard가 id와 nickname만 갖도록 Member에 유틸리티 타입을 쓰세요.
export type MemberCard = any;

export function toMemberCard(member: Member): MemberCard {
  return { id: member.id, nickname: member.nickname };
}

// TODO 2: MemberProfile이 id, nickname, email, phone만 갖도록 Member에 유틸리티 타입을 쓰세요.
export type MemberProfile = any;

export function toMemberProfile(member: Member): MemberProfile {
  return {
    id: member.id,
    nickname: member.nickname,
    email: member.email,
    phone: member.phone,
  };
}

export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

// TODO 3: StatusLabels가 OrderStatus의 상태마다 화면에 보일 문구(string)를 갖도록 유틸리티 타입을 쓰세요.
export type StatusLabels = any;

export const statusLabels: StatusLabels = {
  pending: "결제 대기",
  paid: "결제 완료",
  shipped: "배송 중",
  cancelled: "주문 취소",
};

// 추가 문제
export type MemberGrade = "basic" | "silver" | "gold";

// TODO 4: DiscountRates가 MemberGrade의 등급마다 할인율(number)을 갖도록 유틸리티 타입을 쓰세요.
export type DiscountRates = any;

export const discountRates: DiscountRates = {
  basic: 0,
  silver: 0.05,
  gold: 0.1,
};
