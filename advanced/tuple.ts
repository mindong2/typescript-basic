// tuple -> 자료의 위치까지 정확히 지정할 수 있는 타입 

let dog2 : [string, number];
dog2 = ['kim', 2];

const tuFn = (...rest:[string, number]) => {
    console.log(rest) //rest는 배열로 들어온다.
}

tuFn('hg',3);
// tuFn(11,3233) err
// tuFn('hg',3, 4) err

type Num1 = [number, number?, number?]; // ?옵션은 끝부터. 중간것만 옵션인건 말이 안됩니다.
// type Num1 = [number, number?, number]; err

// array 두개를 spread연산자로 합칠때의 튜플 타입

let arr = [1,2];
let arr2 : [number,number,...number[]] = [3,4,5,...arr];//[3,4,5,1,2];
let newArr : [number,number,...number[]] = [1,2,3,4,5,6,7,8,9];

/*
    practice1
    이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
    let arr = ['동서녹차', 4000, true, false, true, true, false, true]
*/
let arr4 : [string,number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

/*
    practice2
    함수에 타입지정을 해보도록 합시다.
    function 함수(){
    
    }

    1. 이 함수의 첫째 파라미터는 문자,
    2. 둘째 파라미터는 boolean,
    3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
    그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 

    tuple 타입과 rest parameter를 사용해봅시다.
*/

// const tupleFc = (a : string, b : boolean, ...rest : (string|number)[]) => {
//     console.log(a,b,rest);
// }

const tupleFc = ( ...rest: [string, boolean, ...(string|number)[]]) => {
    console.log(rest);
}

tupleFc('g',true,'sgh',2222,431)

/*
practice3
다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

(동작예시)

함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

*/

const tupleCheck = (...rest : (string | number)[]) => {
    const checkArr : [string[], number[]]= [[],[]];

    rest.forEach(v => {
        typeof v === 'string' ? checkArr[0].push(v) : checkArr[1].push(v);
    })

    return checkArr;
}

console.log(tupleCheck('1','g',33,565)) // [['1','g'],[33, 565]]