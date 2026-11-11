export let productId = "c001";
export let price = 129_000;
export let membersOnly = true;

// 예시(TODO 1): 타입 없이 선언했을 때는 any가 되어 template.ts에 TS7005, test-cases.ts 20번 줄에 TS2344 진단이 나왔습니다.
// 나중에 할당되는 "김코드"에 맞춰 string 타입을 직접 선언했습니다.
export let managerName: string;
// TODO 2: 할당될 숫자 값에 맞는 타입을 직접 선언하세요.
export let maxStudents;
// TODO 3: 할당될 불린 값에 맞는 타입을 직접 선언하세요.
export let isClosed;

managerName = "김코드";
maxStudents = 30;
isClosed = false;

// 추가 문제
export let courseName = "TypeScript 입문";
export let lessonCount = 24;

// TODO 4: 할당될 문자열 값에 맞는 타입을 직접 선언하세요.
export let classroomLabel;
// TODO 5: 할당될 숫자 값에 맞는 타입을 직접 선언하세요.
export let currentWeek;
// TODO 6: 할당될 불린 값에 맞는 타입을 직접 선언하세요.
export let hasHomework;

classroomLabel = "A-103";
currentWeek = 4;
hasHomework = true;
