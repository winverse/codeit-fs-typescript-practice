# 유틸리티 타입: Pick·Omit·Record 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type MemberCard = Pick<Member, "id" | "nickname">;
export type MemberProfile = Omit<Member, "password">;
export type StatusLabels = Record<OrderStatus, string>;

export type DiscountRates = Record<MemberGrade, number>;
```

## 해설

`Member`의 키는 다섯 개입니다. 남길 키와 뺄 키 가운데 적은 쪽을 적는 유틸리티 타입을 고르면 간결합니다.

- `TODO 1`: 남길 키(`id`, `nickname`)가 두 개, 뺄 키(`email`, `phone`, `password`)가 세 개이므로 `Pick`으로 남길 키를 고릅니다. 키 여러 개는 `"id" | "nickname"`처럼 Union으로 넘깁니다.
- `TODO 2`: 남길 키가 네 개이고 뺄 키는 `password` 하나이므로 `Omit<Member, "password">`가 간결합니다.
- `TODO 3`: `Record<OrderStatus, string>`은 `OrderStatus`의 네 상태를 모두 키로 갖고 값은 `string`인 객체 타입입니다. 상태 하나라도 빠지면 `statusLabels`에서 오류가 납니다.
- `TODO 4`: 값이 숫자이므로 두 번째 타입 인자에 `number`를 넘깁니다.

`TODO 1`을 `Omit<Member, "email" | "phone" | "password">`로, `TODO 2`를 키 네 개를 적은 `Pick`으로 써도 결과 타입이 같아 확인 명령은 통과합니다. `{ id: number; nickname: string }`처럼 결과 타입을 직접 적어도 네 `TODO` 모두 통과합니다. 다만 `Member`나 `OrderStatus`가 바뀌면 직접 적은 타입도 따로 고쳐야 하므로 유틸리티 타입을 씁니다.

## 자주 하는 실수

- `TODO 1`에 `Omit<Member, "id" | "nickname">`처럼 남길 키를 `Omit`에 넘기면 `template.ts`의 `toMemberCard` 반환 줄에 `error TS2353: Object literal may only specify known properties, and 'id' does not exist in type 'MemberCard'.`가 표시됩니다. `Omit`은 넘긴 키를 빼므로 `id`와 `nickname`이 없는 타입이 됩니다.
