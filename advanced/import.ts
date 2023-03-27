import {my_name, my_age, mynum, Car, Bike,functionType} from './export';

let carcar : Car = {
    wheel : 2,
    model : 'kim'
}

let bikebike : Bike = {
    wheel : 2,
    model : 'model'
}

console.log(my_name);
console.log(my_age);
console.log(mynum);
console.log(carcar);
console.log(bikebike);

const mymyfun : functionType = (obj) => {
    console.log(obj)
}

mymyfun();