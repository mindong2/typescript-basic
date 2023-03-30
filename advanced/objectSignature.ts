export{}

interface StringOnly {
    // age : number; -> err
    name : string; // ok
    [key : string] : string | number; // 모든 키값 string
}

let obj :StringOnly = {
    name : 'kim',
    age : '20',
    location : 'seoul',
    // sad : 21 -> err
}

let obj2 :StringOnly = {
    name : 'kim',
    0 : 'kim', //object에서는 숫자가 key값으로 들어와도 string으로 변환해준다.
    1 : 'good',
    2 : 'age'
}

interface recursive {
    'font-size' : recursive | number;
}

// 이런식으로도 가능
let recursive2 :recursive = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}


/*
    practice 1
    다음 obj 타입지정 한번에 지정하기 위해 index signature를 써봅시다. 
*/

interface objType {
    [key : string] : string | number;
}

let obj1 :objType= {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}