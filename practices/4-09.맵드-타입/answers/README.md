# 맵드 타입 정답과 해설

`template.ts`에서 `TODO` 주석 아래 타입 별칭의 `any`를 다음처럼 바꿉니다. 나머지 코드는 그대로이며, 전체 정답은 `answers/template.ts`에 있습니다.

```ts
export type ProductUpdate = {
  [K in keyof Product]?: Product[K];
};
export type ProductFormValues = {
  [K in keyof Product]: string;
};

export type RequiredMember = {
  [K in keyof Member]-?: Member[K];
};
export type EditableMember = {
  -readonly [K in keyof Member]-?: Member[K];
};
```

## 해설

`[K in keyof Product]`는 `Product`의 키를 하나씩 순회하고, 오른쪽 타입 표현식은 각 키에 적용할 타입입니다.

- `TODO 1`: `Product[K]`로 원래 프로퍼티 타입을 유지하고, 키 뒤에 `?`를 붙여 모든 프로퍼티를 선택 프로퍼티로 만듭니다. 그래서 `{ price: 35_000 }`처럼 일부만 담은 값을 넣을 수 있습니다.
- `TODO 2`: 값 자리에 `Product[K]` 대신 `string`을 적으면 키는 그대로이고 값은 모두 `string`입니다.
- `TODO 3`: `-?`는 `?`를 없애 선택 프로퍼티를 필수로 바꿉니다. `-readonly`를 붙이지 않았으므로 `id`의 `readonly`는 그대로 남습니다.
- `TODO 4`: `-readonly`를 함께 붙이면 `readonly`도 없어집니다. 그래서 `editableMember.id = 2;`가 오류 없이 통과합니다.

네 `TODO` 모두 `ProductUpdate = { id?: string; name?: string; price?: number }`처럼 결과 타입을 직접 적어도 확인 명령은 통과합니다. 다만 `Product`나 `Member`의 프로퍼티가 바뀌면 직접 적은 타입도 따로 고쳐야 하므로 맵드 타입으로 만듭니다.

## 자주 하는 실수

- `TODO 4`에서 `-readonly`를 빼면 `template.ts`의 `editableMember.id = 2;` 줄에 `error TS2540: Cannot assign to 'id' because it is a read-only property.`가 표시됩니다.
- `TODO 1`에서 `?`를 빼면 `template.ts`의 `priceUpdate` 줄에 `error TS2739: Type '{ price: number; }' is missing the following properties from type 'ProductUpdate': id, name`이 표시됩니다. 모든 프로퍼티가 필수로 남아 일부만 담은 값을 넣을 수 없습니다.
