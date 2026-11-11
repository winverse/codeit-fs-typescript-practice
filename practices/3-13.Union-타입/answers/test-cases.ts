import type { Equal, Expect } from "#helpers/type-test.js";
import {
  clothingProduct,
  coupon,
  currentBenefitState,
  getBenefitName,
  getProductName,
  giftCard,
  selectedSize,
  shoeProduct,
} from "./template.js";
import type {
  Benefit,
  BenefitState,
  ClothingProduct,
  ClothingSizeOption,
  DiscountCoupon,
  FeaturedProduct,
  GiftCard,
  ShoeProduct,
} from "./template.js";

type cases = [
  Expect<Equal<FeaturedProduct, ClothingProduct | ShoeProduct>>,
  Expect<Equal<ClothingSizeOption, "S" | "M" | "L" | "XL">>,
  Expect<Equal<typeof selectedSize, ClothingSizeOption>>,
  Expect<Equal<Benefit, DiscountCoupon | GiftCard>>,
  Expect<Equal<BenefitState, "ready" | "active" | "expired">>,
  Expect<Equal<typeof currentBenefitState, BenefitState>>,
];

const productName1: string = getProductName(clothingProduct);
const productName2: string = getProductName(shoeProduct);
const benefitName1: string = getBenefitName(coupon);
const benefitName2: string = getBenefitName(giftCard);

export {};
