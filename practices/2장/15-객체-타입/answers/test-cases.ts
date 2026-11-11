import type { Equal, Expect } from "../../../../_helpers/type-test.js";
import {
  book,
  ebook,
  guestProfile,
  levelByCourse,
  memberProfile,
  stockByIsbn,
} from "./template.js";

type Book = {
  id: string;
  title: string;
  price: number;
  discountRate?: number;
  tags: string[];
};

type Profile = {
  id: string;
  email: string;
  nickname?: string;
  favoriteTags: string[];
  marketingOptIn: boolean;
};

type cases = [
  Expect<Equal<typeof book, Book>>,
  Expect<Equal<typeof ebook, Book>>,
  Expect<Equal<typeof memberProfile, Profile>>,
  Expect<Equal<typeof guestProfile, Profile>>,
  Expect<Equal<typeof stockByIsbn, { [isbn: string]: number }>>,
  Expect<Equal<typeof levelByCourse, { [courseId: string]: number }>>,
];

export {};
