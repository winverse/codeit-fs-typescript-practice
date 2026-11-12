import type { Equal, Expect } from "#helpers/type-test.js";
import type {
  FrozenSearchOptions,
  IssuedReceipt,
  ResolvedSearchOptions,
  ReviewEdit,
} from "./template.js";

type cases = [
  Expect<Equal<ReviewEdit, { id?: number; rating?: number; content?: string }>>,
  Expect<Equal<ResolvedSearchOptions, { keyword: string; page: number }>>,
  Expect<
    Equal<IssuedReceipt, { readonly orderId: number; readonly total: number }>
  >,
  Expect<
    Equal<
      FrozenSearchOptions,
      { readonly keyword: string; readonly page: number }
    >
  >,
];

export {};
