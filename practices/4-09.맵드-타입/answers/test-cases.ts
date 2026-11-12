import type { Equal, Expect } from "#helpers/type-test.js";
import type {
  EditableMember,
  ProductFormValues,
  ProductUpdate,
  RequiredMember,
} from "./template.js";

type cases = [
  Expect<Equal<ProductUpdate, { id?: string; name?: string; price?: number }>>,
  Expect<Equal<ProductFormValues, { id: string; name: string; price: string }>>,
  Expect<
    Equal<
      RequiredMember,
      { readonly id: number; email: string; nickname: string }
    >
  >,
  Expect<
    Equal<EditableMember, { id: number; email: string; nickname: string }>
  >,
];

export {};
