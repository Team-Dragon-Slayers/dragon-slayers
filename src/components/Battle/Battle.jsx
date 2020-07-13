import React from 'react';
import './Battle.css';

const Battle = (props) => {
    return (  
        <div className="Battle"> 
        {props.inBattle ?
        <>
            <h1>Enter a battle with {props.monster.name}!</h1>
            <p>Current Health: {props.monster.currentHealth}</p>
            <p>Attack: {props.monster.attack}</p>
            <p>Defense: {props.monster.defense}</p>

            <h2>Current Player stats:</h2>
            <p>Current Health:  {props.playerStats.currentHealth} </p>
            <p>Attack Points:  {props.playerStats.attack} </p>
            <p>Defense Points:  {props.playerStats.defense} </p>

            <h2>Battle Deck</h2>
        
            {props.battleDeck.map((el, idx) => 
            <button key={idx} onClick={() => props.handleBattle(el)}>
                <p>{el.name}</p>
                <p>{el.type}</p>
                <p>{el.points}</p>
            </button>

            )}
        </>
        :
        <p>The Battle is over!</p>
        }
        </div>
        
    );
}
 
export default Battle;