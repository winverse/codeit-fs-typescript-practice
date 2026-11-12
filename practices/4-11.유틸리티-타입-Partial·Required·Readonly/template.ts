export interface Review {
  id: number;
  rating: number;
  content: string;
}

// TODO 1: editReview가 바꿀 프로퍼티만 담은 객체도 받도록 ReviewEdit에 Review의 유틸리티 타입을 쓰세요.
export type ReviewEdit = any;

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

// TODO 2: ResolvedSearchOptions가 모든 프로퍼티를 빠짐없이 갖도록 SearchOptions에 유틸리티 타입을 쓰세요.
export type ResolvedSearchOptions = any;

export function resolveSearch(options: SearchOptions): ResolvedSearchOptions {
  return {
    keyword: options.keyword ?? "",
    page: options.page ?? 1,
  };
}

export const firstPage: number = resolveSearch({ keyword: "키보드" }).page;

// 추가 문제
export interface Receipt {
  orderId: number;
  total: number;
}

// TODO 3: IssuedReceipt의 프로퍼티에 다시 할당할 수 없도록 Receipt에 유틸리티 타입을 쓰세요.
export type IssuedReceipt = any;

export function printReceipt(receipt: IssuedReceipt): string {
  return `주문 ${receipt.orderId}: ${receipt.total}원`;
}

// TODO 4: FrozenSearchOptions가 모든 프로퍼티를 빠짐없이 갖고 다시 할당할 수도 없도록 SearchOptions에 유틸리티 타입을 쓰세요. 한 유틸리티 타입의 결과를 다른 유틸리티 타입에 넘기세요.
export type FrozenSearchOptions = any;
