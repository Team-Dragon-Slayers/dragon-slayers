import React from 'react';

// const getBattleCards = (deck) => {
//     let battleCards = [];
//     for (let i=0; i<3; i++){
//         let cardNum = Math.floor(Math.random() * deck.length)
//         if (battleCards.length === 0) battleCards.push(deck[cardNum])
//         else{
//             for(let j=0; j<battleCards.length; j++){
//                 if (deck[cardNum].name === battleCards[j].name ){
//                     i--;
//                     break;
//                 } else battleCards.push(deck[cardNum]);
//             } 
//         }   
//     }
//     console.log(battleCards)
//     return battleCards;
// }
// const buildBattleDeck = (deck) => {
//     console.log(`deck: ${deck}`)
//     let battleCards = [];
//     for (let i=0; i<3; i++){
//         let cardNum = Math.floor(Math.random() * deck.length)
//         console.log(`cardNum ${cardNum}`)
//     //     if (battleCards.length === 0) battleCards.push(deck[cardNum])
//     //     else{
//     //         for(let j=0; j<battleCards.length; j++){
//     //             if (deck[cardNum].name === battleCards[j].name ){
//     //                 i--;
//     //                 break;
//     //             } else battleCards.push(deck[cardNum]);
//     //         } 
//     //     }   
//     }
//     console.log(`battleCards arrary ${battleCards}`)
//     // return battleCards;
    
// }

// const handleBuildBattleDeck = (props) => {
//     props.buildBattleDeck(props.deck)
// }

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
        
            {props.battleDeck.map((el) => <p>{el}</p>)}
            

        </div>
    );
}
 
export default Battle;