// ★ 일반적인 type지정 -> 할당된 type은 재정의 불가능

type AnimalType = string | number | undefined;

const ani: AnimalType = "tiger";

// obj
type ObjType = {
    [key: string]: string;
};

const myObj: ObjType = {
    name: "kim",
    adress: "seoul",
};

// ★ readonly (const변수도 재할당만 불가하고 내부는 변경가능 하기 때문에 이를 막기위함)

const arrr = [1, 2, 4];
arrr[3] = 5;

const objj: ObjType = { name: "kim" };
objj.name = "lee";

console.log(arrr, objj); // [1,2,4,5], {name: 'lee'}

// readonly 추가

type ReadonlyArr = readonly number[];
type ReadonlyObj = {
    readonly name: string;
    address: string;
    job?: string; //(string | undefined)
};
const readOnlyArrr: ReadonlyArr = [1, 2, 4];
const readOnlyObj: ReadonlyObj = { name: "kim", address: "seoul" };
readOnlyObj.address = "kangwon"; // -> no err
// readOnlyArrr[3] = 5; -> err
// readOnlyObj.name = 'lee' -> err (readonly는 compile에러만 나고 바뀌긴합니다.)

// type은 extend(합치기)가 가능합니다.

type Str = string;
type Num = number;
const hi: Str | Num = "hi";

// object extend
type XArr = { x: (string | number) };
type YArr = { y: boolean };
type NewType = XArr & YArr;

const newObj: NewType = { x: "str x", y: true };
console.log(newObj)

/* 
    practice1
    1. 이 타입은 object 자료형이어야합니다.
    2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
    3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
    4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
    type alias로 작성
*/
type PracObjType = {
    color? : string,
    size : number,
    readonly position : number[];
}

const pracObj :PracObjType= {size:2, position:[1,2]};
pracObj.position[2] = 2

/* 
    practice2
    다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
    1. 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
    2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/

type pracType2 = {
    name : string,
    phone : number,
    email : string
}

const pracObj2 :pracType2 = {
    name : 'kim',
    phone : 1234,
    email : 'qdwqd@naver.com'
}

/* 
    practice3
    다음을 만족하는 type alias를 만들어보십시오.
    1. 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
    3. 멋있게 practice2에서 만들어둔  type alias를 재활용해봅시다.
*/

type pracType3 = {
    adult : boolean
}

const pracObj3 : (pracType2 & pracType3) = {
    name : 'kim',
    phone : 1234,
    email : 'qwe@naver.com',
    adult : true
}

// ★ Literal Type -> 특정글자나 숫자만 가질 수 있게 제한을 두는 타입
let literalEx : '대머리';
// literalEx : '대머리' = 'string'; -> err

let literalEx1 :('left' | 'right');
literalEx1 = 'right';
// literalEx1 = 'up'; -> err;

const literalEx2 = () : ( 0 | 1 | -1 ) => {
    return 0;
    // return 2; -> err
}
/*
  practice 1
- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
- ['가위', '바보'] 이런거 return하면 에러나야합니다.

*/
const literalEx3 = (x : ('가위' | '바위'| '보')) :('가위' | '바위' | '보')[] => {
    return [x];
    // return 2; -> err
}

literalEx3('바위')

/* ★ as const는?
    1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)
    2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)
*/
let LiteralExObj = {
    name : 'kim'
} as const

const literalEx4 = (x : 'kim') :string => {
    return x;
}
// literalEx4(LiteralExObj.name); -> err (같은 값이지만 string으로 인식하기때문에 정확하게 하려면 해당 obj 뒤에 as const를 붙혀준다.)
literalEx4(LiteralExObj.name);