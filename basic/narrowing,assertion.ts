
/* union type은 일반적 조작이 안된다
const nar = (x : (number | string)) => {
    return x + 1;
}
*/

// Type Narrowing 이란 if문 등으로 타입을 지정하는것 

const nar = (x : (number | string)) => { // x가 123일때
    if(typeof x === 'number') {
        return x + 1; // 124
    }else if(typeof x === 'string') {
        return x + 1; //'1231'
    }else { // 함수 안에서 if문 쓸 때 else가 없으면 에러
        return 0;
    }
}

/* Type Assertion 이란 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할
    - 대부분의 상황에선 as 보다 훨씬 엄격하고 좋은 type narrowing으로 해결, 아래와 같은경우 사용
    
    1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
    2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
*/
function assert(x :number | string){ 
    // number또는 string이 들어갈 수 있지만 number로 생각하라는 의미
    return (x as number) + 1;
}
console.log( assert(123) ) //124
/* 
   x를 number로 생각하지만 '123'을 넣으면 '1231'이 출력된다. (타입변경은 없기때문에)
*/

/*
    practice1
    숫자여러개를 array 자료에 저장해놨는데
    가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
    이걸 클리닝해주는 함수가 필요합니다. 
    클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
    [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어봅시다.
*/

let mixArr : (string | number)[] = ['1',2,'4']; 

const prac1 = (x : (string | number)[] ) => {
    x.map((v, i) => {
        if(typeof v === 'string') x[i] = Number(v);
        else return;
    });
    return x;
}

console.log(prac1(mixArr)); // [1, 2, 4]


/*
    practice2
    선생님이 가르치고 있는 과목중 맨 뒤의 1개를 타입지정 엄격하게 return 해주는 함수를 만들어봅시다.
    
*/

let teacher1 = { subject : 'math' }
let teacher2 = { subject : ['science', 'english'] }
let teacher3 = { subject : ['science', 'art', 'korean'] }

const teacher = (x : {subject : (string | string[])}) :string => {
    if(typeof x.subject === 'string') return x.subject;
    else if(Array.isArray(x.subject)) return x.subject[x.subject.length - 1];
    else return 'none';
}

console.log(teacher(teacher3)); // korean