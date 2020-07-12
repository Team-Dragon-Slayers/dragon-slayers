import React, {Component} from 'react';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';
import RollBtn from './components/RollBtn/RollBtn';
import Message from './components/Message';
import Battle from './components/Battle/Battle';
import Treasure from './components/Treasure/Treasure';
import * as cardAPI from './services/card';
import * as monsterAPI from './services/monster';

const randomNum = (n) => {
  return Math.floor(Math.random() * n);
}

const typeOfSquare = () => {
  let type = randomNum(3);
  if (type === 1){
      return "Monster";
  } else if (type ===2) {
      return "Treasure";
  } else return "Blank"
}

let boardArr = [];
let count = 1;
for(let i=1; i<6; i++){
  for(let j=1; j<4; j++){
    for(let k=1; k<11; k++){
      let obj = {
        id: count,
        zone: i,
        row: j,
        space: k,
        type: (count%30===0) ? "Boss" : typeOfSquare()
      }
      count++;
      boardArr.push(obj)
    }
  }
}

let messages = [
  "You stopped to pick some berries for a while.",
  "You found a nice spot to stop for a rest.",
  "You stopped to check the map.",
  "You got lost while following a butterfly and had to find your way back to the trail.",
  "You got stuck in some mud.",
  "You got hungry and stopped to have a snack"
]


class App extends Component {

  state = {
    playerLocation: 1,
    playerStats: {    
      currentHealth: 10,
      maxHealth: 10,
      attack: 2,
      defense: 2
    },
    deck: [        
      {
          name: 'Dagger',
          type: 'Attack',
          points: 1,
      },
      {
          name:'Sword',
          type: 'Attack',
          points: 2
      },
      {
          name: 'Spell of Fireballs',
          type: 'Attack',
          points: 3
      },
      {
          name:'Wooden Shield',
          type: 'Defense',
          points: 1,
      },
      {
          name: 'Fuzzy Berries',
          type: 'Healing',
          points: 1
      }],
    battleDeck : [],
    message: "Welcome to Dragon Slayers!",
    monster: {},
    treasure: {},
  }

  handleEncounter = () => {
    if (boardArr[this.state.playerLocation-1].type === "Monster") {
      console.log("Monster!")
      this.handleMonsterEncounter(boardArr[this.state.playerLocation-1].zone)
    } else if (boardArr[this.state.playerLocation-1].type === "Treasure") {
      console.log("Treasure!")
      this.addCardToDeck();
    } else if (boardArr[this.state.playerLocation-1].type === "Blank") {
      this.getRandomMessage();
    } else {
      this.setState({message: "Let's slay some dragons!"})
    }
  }

  getRandomMessage = () => {
    let message = messages[Math.floor(Math.random() * messages.length)];
    this.setState({ message: message});
  }

  handleMonsterEncounter = async (zone) => {
    let monster = await monsterAPI.getRandomMonster(zone);
    let msg = `You've encountered an angry monster!`;
    this.setState({message: msg, monster: monster})
    console.log(monster);
  }

  handlePlayerMovement = async () => {
  let dieRoll = await Math.ceil(Math.random() * 6);
  if(Math.floor(this.state.playerLocation / 30) !== (Math.floor((this.state.playerLocation + dieRoll) / 30))){
    dieRoll = 30 - (this.state.playerLocation % 30)
  }
  this.setState({ playerLocation: this.state.playerLocation + dieRoll})
  this.handleEncounter();
  }

  addCardToDeck = async () => {
    let newCard = await cardAPI.drawCard();
    let msg = `You've stumbled upon a buried treasure! A new card has been added to your deck.`
    console.log(newCard)
    this.setState({ deck: [...this.state.deck, newCard], message: msg, treasure: newCard})
    console.log(this.state.deck)
  }

  // getBattleDeck = (battleCards) => {
  //   console.log(battleCards)
  // }

  // getBattleCards = async (deck) => {
  //   let battleCards = await [];
  //   for (let i=0; i<3; i++){
  //       let cardNum = Math.floor(Math.random() * deck.length)
  //       if (battleCards.length === 0) battleCards.push(deck[cardNum])
  //       else{
  //           for(let j=0; j<battleCards.length; j++){
  //               if (deck[cardNum].name === battleCards[j].name ){
  //                   i--;
  //                   break;
  //               } else battleCards.push(deck[cardNum]);
  //           } 
  //       }   
  //   }
  //   console.log(battleCards)
  //   return battleCards;
  // }

 
  render() { 
    return ( 
      <>
        <RollBtn 
          handlePlayerMovement={this.handlePlayerMovement}
        />    
        <Message 
          message={this.state.message}
        /> 
        
        {boardArr[this.state.playerLocation-1].type === "Monster" ? 
        <Battle 
          monster={this.state.monster}
          deck={this.state.deck}
          playerStats={this.state.playerStats}
          battleDeck={this.state.battleDeck}
          // getBattleDeck={this.getBattleDeck}
          // getBattleCards={this.getBattleCards}
        /> : <></>  } 

        {boardArr[this.state.playerLocation-1].type === "Treasure" ? 
        <Treasure 
          treasure={this.state.treasure}
        /> : <></>  } 

        <Gameboard
          boardArr={boardArr}
          playerLocation={this.state.playerLocation}
        />
        <CardRow />
      </>
    );
  }
}
 
export default App;
