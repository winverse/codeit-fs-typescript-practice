// 예시(TODO 1): 빈 Interface일 때는 test-cases.ts 14번 줄에 TS2344 진단이 나왔습니다.
// 상품과 사용자에 공통인 id를 문자열 프로퍼티로 추가했습니다.
export interface Id {
  id: string;
}
// TODO 2: Timestamp에 createdAt과 updatedAt Date 프로퍼티를 추가하세요.
export interface Timestamp {}

// TODO 3: Id와 상품 고유 프로퍼티의 Intersection 타입으로 바꾸세요.
export type Product = any;
// TODO 4: Id, Timestamp, 사용자 고유 프로퍼티의 Intersection 타입으로 바꾸세요.
export type User = any;

export const product: Product = {
  id: "c001",
  name: "코드잇 블랙 후드티",
  price: 129_000,
};

export const user: User = {
  id: "u001",
  username: "codeit",
  email: "typescript@codeit.kr",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function getEntityId(entity: Product | User): string {
  return entity.id;
}

// 추가 문제
export interface Attacker {
  // TODO 5: 공격력을 숫자 타입으로 바꾸세요.
  attackPower: unknown;
  attack(): void;
}

export interface Defender {
  // TODO 6: 방어력을 숫자 타입으로 바꾸세요.
  defensePower: unknown;
  defend(): void;
}

// TODO 7: Attacker, Defender, 이름 프로퍼티의 Intersection 타입으로 바꾸세요.
export type BattleCharacter = any;

export const character: BattleCharacter = {
  name: "팔라딘",
  attackPower: 80,
  defensePower: 60,
  attack() {
    console.log("공격!");
  },
  defend() {
    console.log("방어!");
  },
};
