// 외부 js 라이브러리 등 js파일을 불러올때 ts에서는 해당 변수등을 불러오지 못한다 그럴때 사용하는 declare
declare let jsb : string; // jsb 라는 변수를 이 파일에서 잠깐 정의해주세요" 라는 뜻
/*
    js파일 변수를 가져다 쓰는데 '타입에러나 변수없다는 에러'를 방지하고 싶으면 
    declare 키워드 -> js로 변환되지 않는다, 힌트를 주는 역할의 코드

    tsconfig.json 안에 allowJs 옵션을 true로 켜두면
    js파일도 타입지정이 알아서 implicit 하게 됩니다. 

 */

/*
    Ambient Module -> ts는 import나 export없이 타입들을 사용가능한것 (전역으로 쓸 수 있는 파일을 칭하는 용어)

    import / export 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고
    거기 있는 모든 변수는 export를 해줘야 다른 파일에서 사용가능
    타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 export 키워드를 강제로 추가

    ex) (data.ts)
    export {};
    type Age = number;
    let 나이 :Age = 20;
*/

/* 
    export나 import가 있으면 로컬모듈이 되는데 로컬 모듈에서 전역변수 만들고 싶을 때
    declare global {
        type Dog = string;
    } 
*/