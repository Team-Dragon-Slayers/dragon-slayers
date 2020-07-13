import React from 'react';
import './Treasure.css'

const Treasure = (props) => {
    return (  
        <div className="Treasure">
            <p className="Card-Title">Name: {props.treasure.name}</p>
            <p>Type: {props.treasure.type}</p>
            <p>{props.treasure.type} Points: {props.treasure.points}</p>
        </div>
    );
}
 
export default Treasure;