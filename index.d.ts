/*
d.ts는?

1. 타입정의만 따로 저장해놓고 import 해서 쓰려고
2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용

타입이 정의된 라이브러리를 npm으로 설치하면 

node_modules/@types 이런 경로에 타입이 설치됩니다.
*/

export interface MyObjTypes{
    name : string,
    age : number,
    like : string[]
}

export type multiply = (x :number ,y :number) => number