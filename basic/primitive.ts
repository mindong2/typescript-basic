let myName: string = "kim";
let myAge: number = 21;
let member: string[] = ["kim", "lee"];
let memberInfo: { name: string; age: number } = { name: "kim", age: 25 };

// 간단한 타입지정은 알아서 되므로 모든곳에 하지않아도 됩니다.
let asd = 123;

// let song_info: { singer: string; song: string } = {
//   singer: "아무개",
//   song: "아무곡",
// };

let song_info: { [key: string]: string } = {
  singer: "아무개",
  song: "아무곡",
};

// let project: { [key: string]: number | string[] | boolean } = {
//   member: ["kim", "park"],
//   days: 30,
//   started: true,
// };

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
