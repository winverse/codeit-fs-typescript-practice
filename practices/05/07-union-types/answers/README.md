# Union 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type FeaturedProduct = ClothingProduct | ShoeProduct;
export type ClothingSizeOption = "S" | "M" | "L" | "XL";

export type Benefit = DiscountCoupon | GiftCard;
export type BenefitState = "ready" | "active" | "expired";
```

## 해설

Union 타입은 "이 타입이거나 저 타입"이라는 가능성을 `|`로 표현합니다. 값은 Union을 이루는 타입 중 하나에 맞으면 됩니다.

- `TODO 1`: `clothingProduct`는 `ClothingProduct`에, `shoeProduct`는 `ShoeProduct`에 맞는 값이므로 `FeaturedProduct`는 `ClothingProduct | ShoeProduct`입니다. `getProductName`은 두 타입에 모두 있는 `name`만 쓰므로 고치지 않아도 진단이 나오지 않습니다.
- `TODO 2`: 리터럴 타입을 `|`로 이으면 허용할 값의 목록 자체가 타입이 됩니다. `ClothingSizeOption`은 `"S" | "M" | "L" | "XL"`이고, `selectedSize`에는 이 네 값만 넣을 수 있습니다.
- `TODO 3`: 추가 문제의 `coupon`은 `DiscountCoupon`, `giftCard`는 `GiftCard`에 맞으므로 `Benefit`은 `DiscountCoupon | GiftCard`입니다. `getBenefitName`도 두 타입에 공통인 `name`만 씁니다.
- `TODO 4`: `BenefitState`는 세 상태 문자열의 리터럴 Union인 `"ready" | "active" | "expired"`입니다.

## 자주 하는 실수

- 두 상품의 공통 부분인 `Product`만 쓰면(`export type FeaturedProduct = Product;`) 의류·신발 전용 프로퍼티를 표현하지 못해, `clothingProduct`의 `sizes` 줄에 `error TS2353: Object literal may only specify known properties, and 'sizes' does not exist in type 'Product'.`가 표시됩니다.
- 사이즈를 `string`으로 넓게 선언하면 `template.ts`에서는 진단이 나오지 않지만, 허용할 값을 제한하지 못하므로 `test-cases.ts(25,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.`가 표시됩니다. 네 리터럴 중 `"XL"`처럼 하나를 빠뜨려도 같은 진단이 표시됩니다.
