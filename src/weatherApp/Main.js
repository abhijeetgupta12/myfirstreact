import React from 'react';
import './Main.css';

const getDay = ()=>{
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const dateObject = {        
        month:months[date.getMonth()],
        year:date.getFullYear(),
        day:days[date.getDay()],
        dateToday:date.getDate(),
        time:date.toLocaleTimeString()
    }
    return dateObject;
    
}

const Main = () =>{
    return <div className='box'>
                <div>
                    <h2>Allahabad,IN</h2>
                    <h6>{getDay().day}|{getDay().month} {getDay().dateToday}| {getDay().time}</h6>
                </div>
                <div>
                    <h2>Allahabad,IN</h2>
                    <h6>{getDay().day}|{getDay().month} {getDay().dateToday}| {getDay().time}</h6>
                </div>
           </div>
}

export default Main;