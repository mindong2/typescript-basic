import React, { useState } from 'react';
import './App.css';

let box :JSX.Element = <div>안녕하세요</div>; //JSX 타입지정

function App() {

  // state는 변수지정
  let [user, setUser] = useState('kim');

  return (
    <div className="App">
      <h4 onClick={() => setUser('dongmin')}>안녕하십니까 {user}</h4>      
      {box}
      <Profile name="철수" />
    </div>
  );
}
// 컴포넌트 타입지정
const Profile = (props : {name:string}) :JSX.Element => {
  return (
    <div>
      { props.name }<br/>
    </div>
  )
}

export default App;
