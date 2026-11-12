export interface Product {
  id: string;
  name: string;
  price: number;
  category: "food" | "book" | "clothing";
}

// TODO 1: Product의 id 프로퍼티 타입을 가져온 타입으로 바꾸세요.
export type ProductId = number;
// TODO 2: Product의 category 프로퍼티 타입을 가져온 타입으로 바꾸세요.
export type ProductCategory = string;

export function findProductById(
  products: Product[],
  id: ProductId,
): Product | undefined {
  return products.find((product) => product.id === id);
}

export function filterByCategory(
  products: Product[],
  category: ProductCategory,
): Product[] {
  return products.filter((product) => product.category === category);
}

// 추가 문제
export interface Order {
  orderId: number;
  // TODO 3: Product의 id 프로퍼티 타입을 가져온 타입으로 바꾸세요.
  productId: number;
  quantity: number;
  status: "paid" | "shipped" | "delivered";
}

// TODO 4: Order의 status 프로퍼티 타입을 가져온 타입으로 바꾸세요.
export type OrderStatus = "paid" | "shipped";

export function changeStatus(order: Order, status: OrderStatus): Order {
  return { ...order, status };
}
