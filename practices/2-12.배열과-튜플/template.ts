// 예시(TODO 1): unknown일 때는 test-cases.ts 12번 줄에 TS2344 진단이 나왔습니다.
// 상품 ID 문자열을 담는 배열이므로 unknown을 string[]로 바꿨습니다.
export const cartIds: string[] = ["c001", "c002"];
// TODO 2: 숫자 배열의 배열 타입으로 unknown을 바꾸세요.
export const sizeMatrix: unknown = [[230, 240], [250]];
// TODO 3: 숫자 두 개의 readonly 튜플 타입으로 unknown을 바꾸세요.
export const point: unknown = [120, 340];

// 추가 문제
// TODO 4: 문자열, 숫자, 불린 순서의 readonly 튜플 타입으로 unknown을 바꾸세요.
export const orderLine: unknown = ["c001", 2, true];
// TODO 5: 문자열 배열의 배열 타입으로 unknown을 바꾸세요.
export const discountGroups: unknown = [["WELCOME10"], ["SPRING20", "VIP"]];
// TODO 6: 숫자 두 개의 readonly 튜플 타입으로 unknown을 바꾸세요.
export const coordinate: unknown = [37.5, 127.0];
