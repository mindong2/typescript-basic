export{}
// "타입파라미터 자리에 string 타입을 집어넣으면 string 부여해주시고 그게 아니면 전부 unknown 부여해주세요"
// 타입조건식은 주로 extends와 조건식을 이용. extends는 우측의 성질은 가지고있는지 판별 타입이 확실하지 않은 <타입파라미터> 다룰 때 많이 사용
type Age<T> = T extends string ? string : unknown;

/*
Q. 그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
*/

type Arr<A> = A extends any[] ? A[0] : any;

let arr :Arr<string[]> = 'clear'; 

/* infer 키워드 -> infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드입니다.
    1. 조건문 안에서만 사용가능
    2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣으라는 뜻
    3. R을 조건식 안에서 마음대로 사용가능
    * 타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓰는 키워드

    사용

    1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있습니다.
    2. 함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있습니다. => 이건 ReturnType<>이라는 예약타입이 있다.
*/

type Person<T> = T extends infer R ? R : unknown; 
type NewType = Person<string> // 새타입은 string 타입입니다 

type ArrType <C> = C extends (infer R)[] ? R : unknown;
type NewArrType = ArrType<boolean[]>; //NewArrType은 bolean타입

let asd :NewArrType = true;

type FnType<D> = D extends (() => infer R) ? R : unknown;
type NewFnType = FnType<() => string> // string

/*
    practice1
    1. array 타입을 입력하면
    2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
    3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

    (동작예시)

    let age1 :Age<[string, number]>;
    let age2 :Age<[boolean, number]>; 
    이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

    이걸 만족하는 type Age를 만들어봅시다.
*/
type Age2<G> = G extends [string, ...any] ? G[0] : unknown
type AgeType = Age2<[string, number]>
let age1 :Age2<[string, number]>;
let age2 :Age2<[boolean, number]>;

/*
    practice2
    함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

    ReturnType<(x :number) => void> //이러면 number가 이 자리에 남음
    ReturnType<(x :string) => void> //이러면 string이 이 자리에 남음
    아무튼 함수의 파라미터타입이 남아야합니다.
*/
type ReturnType<W> = W extends ((x :infer R) => void) ? R : any;

type NewReturnType = ReturnType<(x : number) => void>;
