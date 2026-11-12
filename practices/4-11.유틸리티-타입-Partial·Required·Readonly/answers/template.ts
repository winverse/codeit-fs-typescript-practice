export interface Review {
  id: number;
  rating: number;
  content: string;
}

export type ReviewEdit = Partial<Review>;

export function editReview(review: Review, edit: ReviewEdit): Review {
  return { ...review, ...edit };
}

export const editedReview = editReview(
  { id: 1, rating: 3, content: "배송이 느려요" },
  { rating: 4 },
);

export interface SearchOptions {
  keyword?: string;
  page?: number;
}

export type ResolvedSearchOptions = Required<SearchOptions>;

export function resolveSearch(options: SearchOptions): ResolvedSearchOptions {
  return {
    keyword: options.keyword ?? "",
    page: options.page ?? 1,
  };
}

export const firstPage: number = resolveSearch({ keyword: "키보드" }).page;

// 추가 문제 해답
export interface Receipt {
  orderId: number;
  total: number;
}

export type IssuedReceipt = Readonly<Receipt>;

export function printReceipt(receipt: IssuedReceipt): string {
  return `주문 ${receipt.orderId}: ${receipt.total}원`;
}

export type FrozenSearchOptions = Readonly<Required<SearchOptions>>;
