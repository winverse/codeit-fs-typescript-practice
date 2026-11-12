export interface Product {
  id: string;
  name: string;
  price: number;
}

// TODO 1: T를 number에 할당할 수 있으면 "number", 아니면 "text"가 되는 조건부 타입으로 바꾸세요.
export type InputType<T> = any;

export type PriceInput = InputType<Product["price"]>;
export type NameInput = InputType<Product["name"]>;

export type ProductSize = "S" | "M" | "L" | 250 | 260 | 270;

// TODO 2: T의 구성원 가운데 string에 할당할 수 있는 것만 남기는 조건부 타입으로 바꾸세요.
export type TextOnly<T> = any;

export type ClothingSize = TextOnly<ProductSize>;

// 추가 문제
export type StockStatus = "inStock" | "lowStock" | "soldOut";

// TODO 3: T의 구성원 가운데 "soldOut"에 할당할 수 있는 것을 빼는 조건부 타입으로 바꾸세요.
export type Purchasable<T> = any;

export type PurchasableStatus = Purchasable<StockStatus>;
