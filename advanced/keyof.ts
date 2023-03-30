/*
    keyof속성은 object타입에서 사용시 object 타입이 가지고있는 key값을 union type으로 합쳐서 내보낸다.
*/
export {}
interface ObjType {
    name : string,
    age : number,
}

type NewObjType = keyof ObjType; // "name" | "age" 타입
let a :NewObjType = 'age' //가능
let b :NewObjType = 'name' //가능
// let b :NewObjType = 'agee' 에러

interface Person {
    [key : string] : number
}

type NewPerson = keyof Person;

let c :NewPerson = 'ag';
let d :NewPerson = 'agy';
let e :NewPerson = 27 // 이게 가능한 이유는 object에서 key값에 number타입이 오면 자동적으로 string type으로 변환한다.
// let f :NewPerson = true 에러

// type 안의 속성들을 전부 바꿔보자.

type Car = {
    name : boolean,
    model :boolean,
    price : boolean | number
}

type NewCar <MyType> = {
    [key in keyof MyType] : string; // MyType에 있는 key들이 NewCar의 key값으로 존재하면 string으로 지정하는 type
}

type NewType = NewCar<Car>;

let obj3 :NewType = { 
    name : 'ads',
    model : 'asd',
    price : '22'
}

/*
    practice1
    type Bus = {
        color : string,
        model : boolean,
        price : number
    }
    동료가 잘못 만든 타입입니다.
    color, model, price 속성은 전부 string 또는 number 타입이어야합니다.

    1. 변환기 하나 만드시고
    2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.
*/

type Bus = {
    color : string,
    model : boolean,
    price : number
}


type TypeChanger <MyType> = {
    [key in keyof MyType] : string | number
}

type NewBus = TypeChanger<Bus>;

/*
    practice2
    type Bus2 = {
        color : string,
        model : boolean,
        price : number
    }
    이런 변환기는 어떻게 만들어야할까요?
    object안에 들어있는 모든 속성을
    string, number 이렇게 고정된 타입으로 변환해주는게 아니라
    내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오
*/

type Bus2 = {
    color : string,
    model : boolean,
    price : number
}

type SuperTypes<SuperType, T> = {
    [key in keyof SuperType] : T;
}

type NewSuperTypes = SuperTypes<Bus2, boolean>;
type NewSuperTypes2 = SuperTypes<Bus2, number>;