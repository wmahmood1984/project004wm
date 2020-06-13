import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import './Room.css';


function Room() {
    let [isLIt, setLIt] = useState(false);
    let [age, setAge] = useState(35)

    function updateclick(){
        console.log("button clicked")
        setLIt(!isLIt);
        
    }
    function incAge(){
        console.log("age button clicked")
        
        setAge(++age)
    }

                     
  return (           
    <div className={`room ${isLIt? "lit": "dark"}`}> This Room is  {isLIt? "lit": "dark"}
    <br/>
    age = {age}
    <br/>
    <button onClick={updateclick}>Toggle Light</button>
    <br/>
    <button onClick={() =>  {
        console.log("age button clicked")
        
        setAge(++age)
    }}>inc age</button>
    </div>
  );
}

export default Room;
