var name1 = "kik";
var array = ["2", "ㅁ"];
// ?는 들어 갈수도 아닐수도 있는 옵션
var obj = { name: "dm", age: 2 };
var obj2 = {
    name: "dongmin",
    age: "21",
    country: "korea",
};
// union string 또는 number
var name2 = ["hi"];
var name3 = "동민";
// 함수 파라미터 타입, 리턴값 타입
function myFn(x) {
    return x * 2;
}
myFn(4);
var tuple = [2, true];
// class
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
