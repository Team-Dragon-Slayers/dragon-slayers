import React from 'react';

const Treasure = (props) => {
    return (  
        <div>
            <p>Name: {props.treasure.name}</p>
            <p>Type: {props.treasure.type}</p>
            <p>{props.treasure.type} Points: {props.treasure.points}</p>
        </div>
    );
}
 
export default Treasure;