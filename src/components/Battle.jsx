import React from 'react';

const Battle = (props) => {
    return (  
        <div>Enter a battle with {props.monster.name}!
            <p>Current Health: {props.monster.currentHealth}</p>
            <p>Attack: {props.monster.attack}</p>
            <p>Defense: {props.monster.defense}</p>
        </div>
    );
}
 
export default Battle;