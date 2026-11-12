export interface Product {
  id: string;
  name: string;
  price: number;
}

export type InputType<T> = T extends number ? "number" : "text";

export type PriceInput = InputType<Product["price"]>;
export type NameInput = InputType<Product["name"]>;

export type ProductSize = "S" | "M" | "L" | 250 | 260 | 270;

export type TextOnly<T> = T extends string ? T : never;

export type ClothingSize = TextOnly<ProductSize>;

// 추가 문제 해답
export type StockStatus = "inStock" | "lowStock" | "soldOut";

export type Purchasable<T> = T extends "soldOut" ? never : T;

export type PurchasableStatus = Purchasable<StockStatus>;
