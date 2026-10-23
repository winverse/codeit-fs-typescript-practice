# Intersection 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래의 빈 Interface에 프로퍼티를 추가하고, `unknown`·`any`를 다음처럼 바꿉니다. 객체 값과 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export interface Id {
  id: string;
}

export interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
}

export type Product = Id & {
  name: string;
  price: number;
};

export type User = Id &
  Timestamp & {
    username: string;
    email: string;
  };

export interface Attacker {
  attackPower: number;
  attack(): void;
}

export interface Defender {
  defensePower: number;
  defend(): void;
}

export type BattleCharacter = Attacker &
  Defender & {
    name: string;
  };
```

## 해설

Intersection 타입은 "이 타입이면서 동시에 저 타입"이라는 뜻을 `&`로 표현합니다. 여러 타입 조각의 조건을 한 번에 모두 만족해야 합니다.

- `TODO 1`: 상품과 사용자에 공통인 `id`를 조각 타입 `Id`의 `id: string` 프로퍼티로 따로 둡니다.
- `TODO 2`: 시간 정보 조각 `Timestamp`는 `user`에 `new Date()`로 들어가는 두 프로퍼티이므로 `createdAt: Date`, `updatedAt: Date`입니다.
- `TODO 3`: `Product`는 `Id` 조각과 상품 전용 프로퍼티를 합친 `Id & { name: string; price: number }`입니다. `id`를 다시 적지 않아도 `Id`에서 가져옵니다.
- `TODO 4`: `User`는 `Id`와 `Timestamp`를 함께 재사용하고 사용자 전용 `username`, `email`을 더해 `Id & Timestamp & { … }`입니다. `getEntityId`는 `Product | User`를 받는데, 두 타입 모두 `Id`를 포함하므로 `entity.id`를 쓸 수 있습니다.
- `TODO 5`, `TODO 6`: 추가 문제의 `character` 값을 보면 공격력 `80`, 방어력 `60`이므로 `attackPower`, `defensePower`는 `number`입니다.
- `TODO 7`: `BattleCharacter`는 공격자이면서 동시에 방어자이고 이름도 가져야 하므로 `Attacker & Defender & { name: string }`입니다. 그래서 `character`는 `attack()`과 `defend()`를 모두 가져야 합니다.

## 자주 하는 실수

- `&` 대신 `|`로 `Product = Id | { name: string; price: number }`처럼 쓰면 `Product`가 `id`가 없는 값도 허용하게 되어, `getEntityId`의 `return entity.id;` 줄에 `error TS2339: Property 'id' does not exist on type 'Product | User'.`가 표시됩니다.
- `createdAt`을 `string`으로 선언하면 `user`의 `createdAt: new Date(),` 줄에 `error TS2322: Type 'Date' is not assignable to type 'string'.`이 표시됩니다.
