export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ClothingProduct extends Product {
  sizes: string[];
  color: string;
}

export interface ShoeProduct extends Product {
  sizes: number[];
  handmade: boolean;
}

// 예시(TODO 1): any일 때는 test-cases.ts 24번 줄에 TS2344 진단이 나왔습니다.
// 의류 상품과 신발 상품을 모두 받도록 ClothingProduct와 ShoeProduct의 Union 타입으로 바꿨습니다.
export type FeaturedProduct = ClothingProduct | ShoeProduct;
// TODO 2: S, M, L, XL 리터럴의 Union 타입으로 바꾸세요.
export type ClothingSizeOption = any;

export const clothingProduct: FeaturedProduct = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129_000,
  sizes: ["M", "L"],
  color: "black",
};

export const shoeProduct: FeaturedProduct = {
  id: "s001",
  name: "코드잇 스니커즈",
  price: 69_000,
  sizes: [230, 240, 250],
  handmade: false,
};

export const selectedSize: ClothingSizeOption = "M";

export function getProductName(product: FeaturedProduct): string {
  return product.name;
}

// 추가 문제
export interface DiscountCoupon {
  name: string;
  discountPercent: number;
}

export interface GiftCard {
  name: string;
  balance: number;
}

// TODO 3: DiscountCoupon과 GiftCard의 Union 타입으로 바꾸세요.
export type Benefit = any;
// TODO 4: ready, active, expired 리터럴의 Union 타입으로 바꾸세요.
export type BenefitState = any;

export const coupon: Benefit = {
  name: "봄 세일 쿠폰",
  discountPercent: 15,
};

export const giftCard: Benefit = {
  name: "코드잇 기프트카드",
  balance: 50_000,
};

export const currentBenefitState: BenefitState = "active";

export function getBenefitName(benefit: Benefit): string {
  return benefit.name;
}
