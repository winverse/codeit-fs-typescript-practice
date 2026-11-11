// 예시(TODO 1): unknown일 때는 test-cases.ts 28번 줄에 TS2344 진단이 나왔습니다.
// 값에 맞춰 객체 타입을 적고, ebook에는 없는 discountRate에는 ?를 붙여 선택 프로퍼티로 두었습니다.
export const book: {
  id: string;
  title: string;
  price: number;
  discountRate?: number;
  tags: string[];
} = {
  id: "b001",
  title: "정적 타이핑 안내서",
  price: 18_000,
  discountRate: 0.1,
  tags: ["typescript", "types"],
};

// TODO 2: book과 같은 책 객체 타입으로 unknown을 바꾸세요.
export const ebook: unknown = {
  id: "b002",
  title: "타입 시스템 입문",
  price: 12_000,
  tags: ["ebook"],
};

// TODO 3: 문자열 키와 숫자 값을 갖는 인덱스 시그니처로 unknown을 바꾸세요.
export const stockByIsbn: unknown = {
  b001: 3,
  b002: 10,
};

// 추가 문제
// TODO 4: 필수 프로퍼티와 선택 프로퍼티를 포함한 회원 객체 타입으로 unknown을 바꾸세요.
export const memberProfile: unknown = {
  id: "u001",
  email: "teacher@codeit.kr",
  nickname: "타입 선생님",
  favoriteTags: ["typescript", "backend"],
  marketingOptIn: true,
};

// TODO 5: memberProfile과 같은 회원 객체 타입으로 unknown을 바꾸세요.
export const guestProfile: unknown = {
  id: "u002",
  email: "guest@codeit.kr",
  favoriteTags: ["typescript"],
  marketingOptIn: false,
};

// TODO 6: 문자열 키와 숫자 값을 갖는 인덱스 시그니처로 unknown을 바꾸세요.
export const levelByCourse: unknown = {
  ts101: 3,
  ts201: 1,
};
