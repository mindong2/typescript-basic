// 0. undefined, null 타입체크하는 경우가 많다. &&연산자 이용

// 1. obj에서 narrowing

type Fish = {
  swim: string;
};

type Bird = {
  fly: string;
};

const animalFunc = (animal: Fish | Bird) => {
  // 이럴때 swim이 있는지 판별하고 싶을때
  if ("swim" in animal) {
    // 속성명 in 오브젝트자료 (서로 가진 속성명이 다를때)
    console.log(animal.swim);
  }
};

// 2. (서로가진 속성명이 같고, 부모class가 없을때) 유니크한 literal type 지정

type Car2 = {
  // 비슷한 object에 id라는 유니크한 값을 부여해서 narrowing
  id: 1;
  wheel: "4개";
  color: string;
};

type Bike = {
  id: 2;
  wheel: "2개";
  color: "black";
};

const load = (x: Car2 | Bike) => {
  if (x.id === 1) {
    console.log(x.wheel);
  }
};

// 3. 오브젝트 isntanceof 부모Class (오브젝트의 부모가 누구인지)
let date = new Date();
if (date instanceof Date) {
  console.log("done");
}

// class 복습
class MyClass {
    name :string;
    constructor(x :string) {
        this.name = x
    }
    myClassFunc(a : string) {
        console.log(a)
    }
}

let user2 = new MyClass('kim')

console.log(user2)
console.log(user2.myClassFunc('kim'))

// Destructuring 할때 타입지정

let objobj = {
  student: "kim",
  age: 28,
  self: true,
  number: [1, 2, 3],
};

interface objobjType {
  student: string;
  age: number;
}

interface objobjType2 {
  number: number[];
}

interface objobjType extends objobjType2 {
  self: boolean;
}

const fnfn = ({ student, age, self, number }: objobjType) => {
  console.log(student, age, self, number);
};

fnfn(objobj);
