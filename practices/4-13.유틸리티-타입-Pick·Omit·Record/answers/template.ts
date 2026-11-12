export interface Member {
  id: number;
  nickname: string;
  email: string;
  phone: string;
  password: string;
}

export type MemberCard = Pick<Member, "id" | "nickname">;

export function toMemberCard(member: Member): MemberCard {
  return { id: member.id, nickname: member.nickname };
}

export type MemberProfile = Omit<Member, "password">;

export function toMemberProfile(member: Member): MemberProfile {
  return {
    id: member.id,
    nickname: member.nickname,
    email: member.email,
    phone: member.phone,
  };
}

export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

export type StatusLabels = Record<OrderStatus, string>;

export const statusLabels: StatusLabels = {
  pending: "결제 대기",
  paid: "결제 완료",
  shipped: "배송 중",
  cancelled: "주문 취소",
};

// 추가 문제 해답
export type MemberGrade = "basic" | "silver" | "gold";

export type DiscountRates = Record<MemberGrade, number>;

export const discountRates: DiscountRates = {
  basic: 0,
  silver: 0.05,
  gold: 0.1,
};
