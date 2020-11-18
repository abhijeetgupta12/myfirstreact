import React from 'react';
import './Card.css';


function Card(props){
    
    return(
        <div className="card">
            <img src={props.pic} height='200' width='150' alt="pic"/>
            <h3>{props.sname}</h3>
            <p>{props.title}</p>
            <a href={props.link} target="_blank">
                <button className="card_button">Watch Now</button>
            </a>
        </div>

    );

}

export default Card;