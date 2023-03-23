/*
 ★ Class: 예를들어 op.gg 처럼 캐릭터별 스킬정리할때 
    비슷한 obj많이 만들일 있을때 주로 사용 (object 뽑는 기계)
 */

// ES6 문법

class Charactors1 {
    constructor(q, w) {
        this.q = q,
        this.w = w
    }
}

// 예전방식 -> 여기서의 this -> 함수로부터 생성되는 object (instance)
function Charactors2(q, w) {
    this.q = q,
    this.w = w;
}


let nunuES6 = new Charactors1('consume', 'snowball'); //하단의 nunu와 같음
let garenES6 = new Charactors1('strike', 'courage'); // 하단의 garen과 같음
let nunu = new Charactors2('consume', 'snowball'); //하단의 nunu와 같음
let garen = new Charactors2('strike', 'courage'); // 하단의 garen과 같음

console.log(nunuES6)
console.log(garenES6)

console.log(nunu)
console.log(garen)

// let nunu = {
//     q : 'consume',
//     w : 'snowball'
// }

// let garen = {
//     q : 'strike',
//     w : 'courage'
// }


/*
    ★ Prototype (유전자와 비슷하다고 생각하면 편합니다.)
*/

class Example1 {
    constructor(q, w) {
        this.q = q,
        this.w = w
    }
}
// Class의 prototype에 하단과 같이 지정해놓으면 해당 Class를 쓰는 모든 곳에서 참조가능하다. 부모만 가지고있는 data
Example1.prototype.name = 'kim'

// 만약 kim이나 lee에서 lee.name을 할때 name이없어도 부모까지 뒤져본다 (부모의 prototype에 존재하기 때문에 가져다 쓸 수 있다)
let kim = new Example1('kim','kim')
let lee = new Example1('lee','lee')
console.log(kim.name) // kim
console.log(lee)

/*
  array등에서 내장함수를 지정한적이 없는데 사용할 수 있는이유
  let arr = [1,2,3]; 으로 선언해도 컴퓨터는 하단과같이 저장을 한다. 
  let arr = new Array(1,2,3); 

  이미 내장에 Array의 prototype에 .sort 등 다양한 함수가 호출되어있기때문에 어떤 array라도 사용가능한것이다
  MDN에도 찾아보면 Array.prototype.sort 등으로 나와있는 이유,

  실제로 추가도 가능하다
*/

Array.prototype.myFn = () => {
    console.log('hi');
}

let newArr = [1,2,3];
newArr.myFn() // hi