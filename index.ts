import {MyObjTypes, multiply} from './index.d'
export{}

let obj : MyObjTypes = {
    name:'kim',
    age : 21,
    like : ['singing', 'game']
}

const myfun : multiply = (a, b) => a + b; 

console.log(obj);
console.log(myfun(1,3));