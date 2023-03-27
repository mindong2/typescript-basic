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