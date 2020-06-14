import React, { useState }from 'react';

import './App.css';
import './Room.css';


function Room() {
    let [isLIt, setLIt] = useState(false);
    let [temp, setTemp] = useState(72)

    function OnButton(){
        console.log("On button clicked")
        setLIt(true);
        
    }

    function OffButton(){
        console.log("off button clicked")
        setLIt(false);
        
    }    
    function incTemp(){
        console.log("inc Temp button clicked")
        
        setTemp(++temp)
    }
    function decTemp(){
        console.log("dec Temp button clicked")
        
        setTemp(--temp)
    }
                     
  return (           
    <div className={`room ${isLIt? "lit": "dark"}`}> This Room is  {isLIt? "lit": "dark"}
    <br/>The temp of this room is {temp}
    <br/>
    <button onClick={OnButton}>Toggle Light On</button>
    <br/>
    <button onClick={OffButton}>Toggle Light Off</button>
    <br/>
    <button onClick={incTemp}>Increase Temp</button>
    <br/>
    <button onClick={decTemp}>Decrease Temp</button>
    </div>
  );
}

export default Room;
