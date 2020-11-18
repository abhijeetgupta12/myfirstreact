import React from 'react';
import './WishTeacher.css';

function WishTeacher(){

    let greeting='';
    let styling={};
    const hour = new Date().getHours();
    if(hour>=1 && hour<12){
        greeting='Good Morning';
        styling.color='Green';
    }
    else if(hour>=12 && hour<19){
        greeting='Good Afternoons';
        styling.color='Orange';
    }
    else{
        greeting='Good Night';
        styling.color='Yellow';
    }

    return(
        <div className="div2">
            <h1>Hello Sir, <span style={styling}>{greeting}</span></h1>
        </div>
    );
}

export default WishTeacher;