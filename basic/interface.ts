// object에서 interface도 가능

// type Square = {color : string, width : number}
interface Square {
  color: string;
  width: number;
}

let square: Square = { color: "red", width: 100 };

// & type intersection -> interface도 가능 (합치는게 아니고 둘 다 만족해야 한다는 의미)

type Animal = { name: string };
type Cat = { age: number } & Animal; // {name:string, age: number}

/*
  interface Student {name : string}
  interface Teacher {name : string, age:number}
*/

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
} // {name:string, age: number}

let student1: Student = { name: "kim" };
let student2: Teacher = { name: "kim", age: 20 };

/* type과 interface의 차이
 * interface는 중복선언 가능 (자동 extends), type은 불가능 (더 엄격하다)
 * interface 내 중복속성 선언은 X type은 가능하지만 never타입이 됨
 * 외부 라이브러리의 경우 interface 많이 쓴다 추후 내가 타입에 추가하기 수월
 * 다른 사람들이 이용할것 같은 object는 interface로 지정하는게 좋다.
 */

/*
  interface Test {name : string}
  interface Test2 extends Test {name : number} -> 중복은 안되므로 err
*/

interface Test {
  address: string;
}
interface Test {
  sex: string;
} // -> {address : string, sex : string} 자동 extends
interface Test2 extends Test {
  name: string;
}
interface Test3 extends Test2 {
  age: number;
}

let test1: Test = { address: "gangwon", sex: "man" };
let test2: Test2 = { name: "kim", address: "seoul", sex: "male" };
let test3: Test3 = { name: "kim", address: "busan", age: 23, sex: "femail" };

/*
  practice 1

  interface 이용해서 간단하게 타입을 만들어봅시다.
  이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
*/
interface Item {
  brand: string;
  serialNumber: number;
  model: string[];
}
let item: Item = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

/*
  practice 2

  array 안에 object 여러개가 필요합니다.
  쇼핑몰 장바구니를 구현하려고 하는데 
  이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
*/
interface Bucket {
  product: string;
  price: number;
}
let bucket: Bucket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

/*
  practice 3

  위에서 만든 타입을 extends 해봅시다.
  갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
  위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
  */
interface newBucket extends Bucket {
  card: boolean;
}
let newBucket: newBucket = { product: "청소기", price: 7000, card: false };

/*
  practice 4

  object 안에 함수를 2개 넣고 싶은데요 
  1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
  2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
  이 object 자료를 어떻게 만들면 될까요? 

  interface를 이용해서 object에 타입지정도 해보십시오. 
*/
interface ObjTest {
  [key: string]: (a: number, b: number) => number;
}
let objTest: ObjTest = {
  plus(a, b) {
      return a + b;
  },
  minus(a, b) {
      return a - b;
  },
};

let btn11 = document.querySelector(".btn");
let p11 = document.querySelector(".num");

btn11?.addEventListener("click", function () {
  if (btn11 instanceof HTMLButtonElement && p11 instanceof HTMLElement) {
    p11.innerText = objTest.plus(1, 2).toString();
    console.log(typeof p11.innerText); //string
  }
});
