let name1: string = "kik";

let array: string[] = ["2", "ㅁ"];

// ?는 들어 갈수도 아닐수도 있는 옵션
let obj: { name?: string; age: number } = { name: "dm", age: 2 };

// obj 여러개 한번에 정의
type Obj = {
  [key: string]: string;
};

let obj2: Obj = {
  name: "dongmin",
  age: "21",
  country: "korea",
};

// union string 또는 number
let name2: string[] | number = ["hi"];

type MyType = string | number;

let name3: MyType = "동민";

// 함수 파라미터 타입, 리턴값 타입

function myFn(x: number): number {
  return x * 2;
}
myFn(4);

// 튜플
type Member = [number, boolean];

let tuple: Member = [2, true];

// class

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
