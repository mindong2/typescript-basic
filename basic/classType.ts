class Person {
    data; //field (constructor와 똑같은 역할) 모든 참조자들은 해당 데이터 사용가능
    name :string; // Typescript constructor에서는 위에서 미리 선언해야한다.
    constructor(name : string){
        this.name = name
        this.data = 'data';
    }

    // prototype에 추가하는 영역
    myFn(a : string){
        console.log(`안녕, ${a}`)
    }
}

let man1 = new Person('kim');
let man2 = new Person('lee');

console.log(man1, man2)

man1.myFn(man1.name)


/* 
    practice 1 
    Car 클래스를 만들고 싶습니다.
    1. { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
    2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
    3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
*/

class Car {
    model: string;
    price: number;
    constructor(name :string, price:number) {
        this.model = name,
        this.price = price
    }
    tax() : number{
        return this.price / 10;
    }
}

let car1 = new Car('accent', 4000);
let car2 = new Car('morning', 1500);
console.log(car1, car1.tax());
console.log(car2, car2.tax());

/*
    practice2
    class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
    1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
    2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
    3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
    4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마세요
*/
class Word {
    num : number[] = [];
    str : string[] = [];
    constructor(...rest : (number|string)[] ){
        rest.forEach(v => {
            typeof v === 'number' ? this.num.push(v) : this.str.push(v);
        }) 
    }
}

let word = new Word('asd', 22, 'asdasd', 'good', 14, 655)

console.log(word.num)
console.log(word.str)