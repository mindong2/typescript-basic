class MyUser {
    public name : string = 'kim'; //public은 모든 자식들이 (이용,수정)가능 (default)
    constructor(a : string) {
        this.name = a;
    }

    public MyUserFn () {
        console.log('prototype')
    }
}

let user1 = new MyUser('park');

user1.name = 'lee';

class MyUser2 {
    name : string; //private는 모든 자식들이 (이용,수정)불가 (클래스 내에서만 수정가능)
    // 수정하면 안되는 중요한 것을 private지정 (클래스 안에서는 수정가능)
    private familyName : string = 'kim'
    constructor(a : string) {
        this.name = this.familyName + a;
    }
    // 밖에서 private속성 내용을 바꾸고싶을땐 함수로 변경
    changeName(){
        this.familyName = 'park';
    }
}

let user_2 = new MyUser2('dongmin');
user_2.changeName();
console.log(user_2) // familyName은 park

class People {
    //consturctor 파라미터에 public으로 선언하면 field에 선언 안해도 된다
    constructor( public name : string){
        this.name = name;
    }
}

let people = new People('kim');
console.log(people)

class TestClass {
    // protected 속성을 이용하면 다른 클래스에 extends는 가능
    protected x:number;
    constructor() {
        this.x = 10;
    }
}

class Protected extends TestClass{
    doThis(){
        this.x = 20;
    }
}
let sada = new Protected();
sada.doThis();
// console.log(sada.x) ->  error (class내에서만 참조, 수정가능)

class Static{
    //static을 붙히면 부모에서만 직접부여
    private static a = 2; //2개 함께 가능
    static x =10; 
    // num = this.x + 5 -> err (사용하려면 해당 클래스 명으로)
    num = Static.x + 5 // 15
    y = 20;
}

console.log(new Static) // {y:20}
console.log(Static.x) // 10 (원래 class는 자식만 사용할수있지만 static을 붙히면 부모에서만 사용가능)

/* practice1
    class User {
    private static x = 10;
    public static y = 20;
    }
    User.addOne(3) //이렇게 하면 x가 3 더해져야함
    User.addOne(4) //이렇게 하면 x가 4 더해져야함
*/

class PracUser {
    private static x = 10;
    public static y = 20;
    static addOne(a :number) {
        return PracUser.x + a;
    }
    }
    let asdasd = new PracUser();
    console.log(asdasd) //undefined 
    console.log( PracUser.addOne(3)) //이렇게 하면 x가 3 더해져야함
    
    console.log(PracUser.addOne(4)) //이렇게 하면 x가 4 더해져야함

/*
    practice2

    let 네모 = new Square(30, 30, 'red');
    네모.draw()
    네모.draw()
    네모.draw()
    네모.draw()
    이렇게 네모.draw()를 할 때마다

    index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야합니다.
*/

class Square {
    x :number;
    y :number;
    color : string;
    constructor(x :number, y:number, color :string){
        this.x = x;
        this.y = y;
        this.color = color
    }
    draw(){
        let a = Math.random();
        let square = `<div style="position:relative; 
        top:${a * 400}px; 
        left:${a * 400}px; 
        width:${this.x}px; 
        height : ${this.y}px; 
        background:${this.color}"></div>`;
        document.body.insertAdjacentHTML( 'beforeend', square );
    }
}

let 네모 = new Square(30, 30, 'red');
    네모.draw()
    네모.draw()
    네모.draw()
    네모.draw()