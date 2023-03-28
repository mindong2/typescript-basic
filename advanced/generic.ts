/*
const gen = (x :unknown[]) => {
    return x[0];
}

let a = gen([4,2]); //a 는 unknown type
// console.log(a + 2) -> err

이런 문제해결로는 narrowing과 generic이있다.
generic이 확장성이 좋다
*/

const gen = <GenType>(x :GenType[]) : GenType => {
    return x[0];
}

let a = gen<number>([4,2]);
let b = gen<string>(['4','2']); //generic함수로 호출할때마다 다른 타입 출력가능하다~



// const gen2 =<GenType2> (x : GenType2) : GenType2 => {
//     return x - 1; //에러가 나는 이유는 GenType2에 number가 올지 안올지 모르기 때문
// }

// gen2<number>(5)

// extends는 Mytype이 우측에있는 type을 가지고있는지 확인
const gen2 =<GenType2 extends number> (x : GenType2) => {
    return x - 1;
    }
    
gen2<number>(5)

type MyInterface = string;

// MyInterface가 있는지 검토
const gen3 =<GenType3 extends MyInterface> (x : GenType3) => {
    return x.length;
}

let d = gen3<string>('hi');
// let e = gen3<number>(22); err

/*
    practice1
    문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
    
    함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 

    함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 
*/

const pracFn1 = <genType extends string | string[]>(x : genType) => {
    console.log(x.length);
}

pracFn1<string>('hello');
pracFn1<string[]>(['kim', 'park']);

/*
    practice2
    data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
    근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
    Generic을 이용해서 구현해보도록 합시다.  

    (동작 예시)
    함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal
*/

interface AnimalTypeA {
    name : string;
    age : number 
}
  
let data = '{"name" : "dog", "age" : 1 }'

const animalFn = <Animal> (x : string) : Animal => {
    return JSON.parse(x);
}
console.log(animalFn<AnimalTypeA>(data))

/*
    practice3

    파라미터에 string을 집어넣으면 string 타입
    number를 집어넣으면 number 타입
    string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
    Generic을 이용해봅시다. 
*/
class PersonClass <myType> {
    public name;
    constructor(my_name : myType){
      this.name = my_name;
    }
}

let person = new PersonClass<string>('어쩌구');
let person_age = new PersonClass<number>(28);
let person_arr = new PersonClass<string[]>(['kim', 'park']);

console.log(person.name) // 어쩌구
console.log(person_age.name) // 28
console.log(person_arr.name) // ['kim', 'park']