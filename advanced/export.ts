export let my_name = 'kim';
export let my_age = 20;

export type Car = {
    wheel : number,
    model : string
  }
export interface Bike {
wheel : 2,
model : string
}

// 네임스페이스 (module도 같은 의미)
namespace namespace {
    export type Name = string | number;
}

export let mynum : namespace.Name = 'kim';

export type functionType = (obj ?: object) => void

namespace DogName {
    export type Dog = string;
}

namespace DogName2 {
    export interface Dog { name : string };
}

let dog1 :DogName.Dog = 'bark';
let dog2 :DogName2.Dog = { name : 'paw' }
// 위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 