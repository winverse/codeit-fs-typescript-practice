export interface Product {
  id: string;
  name: string;
  price: number;
  category: "food" | "book" | "clothing";
}

export type ProductId = Product["id"];
export type ProductCategory = Product["category"];

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

// 추가 문제 해답
export interface Order {
  orderId: number;
  productId: Product["id"];
  quantity: number;
  status: "paid" | "shipped" | "delivered";
}

export type OrderStatus = Order["status"];

export function changeStatus(order: Order, status: OrderStatus): Order {
  return { ...order, status };
}
