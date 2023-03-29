export{}
/*
  implements 키워드 -> class 타입을 확인하고 싶을때 사용
  이 키워드는 타입지정이 아니고 확인만 하는것.
*/

interface CarType {
  model :string,
  price : number
}

class Car implements CarType{ //Car 클래스에 CarType에 해당하는 타입이 존재하는지 확인 (오브젝트처럼)
  model : string;
  price : 1000
  constructor(a : string){
    this.model = a;
  }
}

let car = new Car('sonata');
console.log(car);