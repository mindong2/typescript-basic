// ★ 일반적인 type지정 -> 할당된 type은 재정의 불가능
var ani = "tiger";
var myObj = {
    name: "kim",
    adress: "seoul",
};
// ★ readonly (const변수도 재할당만 불가하고 내부는 변경가능 하기 때문에 이를 막기위함)
var arrr = [1, 2, 4];
arrr[3] = 5;
var objj = { name: "kim" };
objj.name = "lee";
console.log(arrr, objj); // [1,2,4,5], {name: 'lee'}
var readOnlyArrr = [1, 2, 4];
var readOnlyObj = { name: "kim", address: "seoul" };
readOnlyObj.address = "kangwon"; // -> no err
var hi = "hi";
var newObj = { x: "str x", y: true };
console.log(newObj);
var pracObj = { size: 2, position: [1, 2] };
pracObj.position[2] = 2;
var pracObj2 = {
    name: "kim",
    phone: 1234,
    email: "qdwqd@naver.com",
};
var pracObj3 = {
    name: "kim",
    phone: 1234,
    email: "qwe@naver.com",
    adult: true,
};
// ★ Literal Type -> 특정글자나 숫자만 가질 수 있게 제한을 두는 타입
var literalEx;
// literalEx : '대머리' = 'string'; -> err
var literalEx1;
literalEx1 = "right";
// literalEx1 = 'up'; -> err;
var literalEx2 = function () {
    return 0;
    // return 2; -> err
};
/*
  practice 1
- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
- ['가위', '바보'] 이런거 return하면 에러나야합니다.

*/
var literalEx3 = function (x) {
    return [x];
    // return 2; -> err
};
literalEx3("바위");
/* ★ as const는?
    1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)
    2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)
*/
var LiteralExObj = {
    name: "kim",
};
var literalEx4 = function (x) {
    return x;
};
// literalEx4(LiteralExObj.name); -> err (같은 값이지만 string으로 인식하기때문에 정확하게 하려면 해당 obj 뒤에 as const를 붙혀준다.)
literalEx4(LiteralExObj.name);
var FnAlias = function (a) { return 0; };
FnAlias("hi"); // 0
var FnAliasObj = {
    name: "kim",
    objFn: function (x) {
        return x + 1;
    },
    changeName: function () { return console.log("안녕"); },
};
FnAliasObj.objFn(2);
FnAliasObj.changeName();
var cutZero = function (str) {
    if (str.charAt(0) === "0") {
        str = str.replace("0", "");
    }
    return str;
};
console.log(cutZero("01234"));
var removeDash = function (str) {
    str = str.replace(/-/g, "");
    return Number(str);
};
console.log(removeDash("-1234"));
var FnAlias2 = function (a, b, c) {
    console.log(c(b(a)));
};
// 더 깔끔한 방식
// type 함수타입1 = (a :string) => string;
// type 함수타입2 = (a :string) => number;
// function 만들함수(a :string, func1 :함수타입1, func2 :함수타입2){
//   let result = func1(a);
//   let result2 = func2(result);
//   console.log(result2)
// }
FnAlias2("010-1111-2222", cutZero, removeDash);
