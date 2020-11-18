import React, {useState} from 'react';

const Display = () =>{

    const [time, setTime] = useState(new Date().toLocaleTimeString());   

    const Change = ()=>{
        setTime(new Date().toLocaleTimeString());
    }
    // setInterval(Change,1000); 
    // -->this method is used to call automatically a function after given interval (here 1000 ms)
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={Change}>Click Me</button>
        </div>
    );

}

export default Display;