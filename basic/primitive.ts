let myName: string = "kim";
let myAge: number = 21;
let member: string[] = ["kim", "lee"];
let memberInfo: { name: string; age: number } = { name: "kim", age: 25 };

// 간단한 타입지정은 알아서 되므로 모든곳에 하지않아도 됩니다.
let asd = 123;

// let song_info: { singer: string; song: string } = {
//   singer: "아무개",
//   song: "아무곡",
// };

let song_info: { [key: string]: string } = {
  singer: "아무개",
  song: "아무곡",
};

// let project: { [key: string]: number | string[] | boolean } = {
//   member: ["kim", "park"],
//   days: 30,
//   started: true,
// };

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// union type은 새로운 타입을 하나 만드는것이므로 확실한 연산등은 수행할수 없다

let ex : (string | number);
// ex + 1 err
let ex_array:(number | string)[] = [1,'2',3]
let ex_obj: {data : (number | string)} = { data : '123' }

/* any와 unknown의 차이
   둘 다 모든 타입이 들어갈수있으나 unknown은 다른곳에서 사용하거나, 내장함수 등 사용시 에러
   결론 -> 타입을 정확히 모르겠으나 약간의 안정성을 도모하고싶으면 unknown을 사용
   
   unknown 타입인 변수를 조작하려면 
   내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용
*/
let any : any = 'any ?';
let unknown : unknown = 'unknown';
// any + 1 no -> err
// unknown + 1 -> err

// practice 

let user : string = 'kim';
let age : (undefined | number) = undefined;
let married : boolean = false; 
let kim : (string | undefined | number | boolean)[] = [user, age, married];

let school : ({
  score : (number | boolean)[],
  teacher : string,
  friend : (string | string[])
}) = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

school.score[4] = false;
school.friend = ['Lee' , school.teacher]

/* 함수
  1. 함수로 들어오는 자료 (파라미터)
  2. 함수에서 나가는 자료 (return)
*/

function myFunc(x :number) :number {  // 기본형 -> 파라미터 타입, 리턴값 타입
  return x * 2 
} 

function myFunction(x :number) :void { // void는 return할 자료가 없는 함수의 타입 (return 방지할때)
//   return x * 2 -> err
} 

function myFn1(x? :number) {  //  === (undefined | number)
  
}
myFn1(); //가능
myFn1(2); //가능

// practice (function)

/* 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력
      아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력 */
const fn1 = (para ?: string) : void => {
  (para)
  ? console.log('이름이 없습니다')
  : console.log(`안녕하세요${para}`)
}
fn1('홍길동');

// 2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
const toNum = (str : (string | number)) : number => {
  return str.toString().length;
}

/* 3. 결혼 가능 확률을 알려주는 함수
  1 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
  2 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
  3 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

  (예시)

  merry(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

  merry(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

  */
const merry = (month : number, house : boolean, char : string) : (string | void) => {
  let sum = 0;
  sum += month;
  house ? sum += 500 : sum;
  char === '상' ? sum += 100 : null;

  sum >= 600 && '결혼가능';
}