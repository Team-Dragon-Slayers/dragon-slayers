import React from 'react';

const Battle = (props) => {
    return (  
        <div> 
            <h1>Enter a battle with {props.monster.name}!</h1>
            <p>Current Health: {props.monster.currentHealth}</p>
            <p>Attack: {props.monster.attack}</p>
            <p>Defense: {props.monster.defense}</p>

            <h2>Current Player stats:</h2>
            Current Health:  {props.playerStats.currentHealth}
            Attack Points:  {props.playerStats.attack}
            Defense Points:  {props.playerStats.defense}

            <h2>Battle Deck</h2>
        
            {props.battleDeck.map((el, idx) => 
            <button onClick={() => props.handleBattle(el)}>
                <p>{el.name}</p>
                <p>{el.type}</p>
                <p>{el.points}</p>
            </button>
            )}
            

        </div>
    );
}
 
export default Battle;