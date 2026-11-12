import type { Equal, Expect } from "#helpers/type-test.js";
import type {
  DiscountRates,
  MemberCard,
  MemberProfile,
  StatusLabels,
} from "./template.js";

type cases = [
  Expect<Equal<MemberCard, { id: number; nickname: string }>>,
  Expect<
    Equal<
      MemberProfile,
      { id: number; nickname: string; email: string; phone: string }
    >
  >,
  Expect<
    Equal<
      StatusLabels,
      { pending: string; paid: string; shipped: string; cancelled: string }
    >
  >,
  Expect<Equal<DiscountRates, { basic: number; silver: number; gold: number }>>,
];

export {};
