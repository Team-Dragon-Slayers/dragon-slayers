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
import * as bossAPI from './services/boss';
import * as battleAPI from './services/battle';

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
    let playerLocationSpace = boardArr[this.state.playerLocation-1];
    if (playerLocationSpace.type === "Monster") {
      this.handleMonsterEncounter(playerLocationSpace.zone)
    } else if (playerLocationSpace.type === "Treasure") {
      this.addCardToDeck();
    } else if (playerLocationSpace.type === "Blank") {
      this.getRandomMessage();
    } else if(playerLocationSpace.type === "Boss"){
      this.handleBossEncounter(playerLocationSpace.zone);
    }else {
      this.setState({message: "Let's slay some dragons!"})
    }
  }

  getRandomMessage = () => {
    let message = messages[Math.floor(Math.random() * messages.length)];
    this.setState({ message: message});
  }

  handleBossEncounter = async (zone) => {
    let boss = await bossAPI.getRandomBosses(zone);
    let msg = `You've encountered the boss of zone ${zone}!`;
    let newDeck = await this.buildBattleDeck(this.state.deck);
    this.setState({message: msg, monster: boss, battleDeck: newDeck})
  }

  handleMonsterEncounter = async (zone) => {
    let monster = await monsterAPI.getRandomMonster(zone);
    let msg = `You've encountered an angry monster!`;
    let newDeck = await this.buildBattleDeck(this.state.deck);
    this.setState({message: msg, monster: monster, battleDeck: newDeck})
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
    let msg = `You've stumbled upon a buried treasure! A new card has been added to your deck.`;
    this.setState({ deck: [...this.state.deck, newCard], message: msg, treasure: newCard});
  }

  buildBattleDeck = async (playerDeck) => {
    let battleDeck = await battleAPI.getBattleCards(playerDeck);
    return battleDeck;
  }

  handleBattle = (card) => {
    let currentMonster = this.state.monster;
    let playerStats = this.state.playerStats;
    if (card.type === "Attack") {
      let monsterHealth = currentMonster.currentHealth - (playerStats.attack + card.points - currentMonster.defense);
      if (monsterHealth <= 0)  {
        return this.handleBattleWin();
      } else {
        this.handleMonsterCounterAttack(0);
      }
      if (monsterHealth <= currentMonster.currentHealth) {
        this.setState(prevState => {
          let monster = Object.assign({}, prevState.monster);
          monster.currentHealth = monsterHealth;
          return { monster }
        });
      }
    } else if (card.type === "Healing") {
      let playerHealth = playerStats.currentHealth + card.points
      this.handleMonsterCounterAttack(0);
      this.setState(prevState => {
        let playerStats = Object.assign({}, prevState.playerStats);
        playerStats.currentHealth = playerHealth;
        return { playerStats }
      });
    } else {
      return this.handleMonsterCounterAttack(card.points);
    }
  }

  handleMonsterCounterAttack = (bonusDefense) => {
    let currentMonster = this.state.monster;
    let monsterAttack = currentMonster.attack;
    let player = this.state.playerStats;
    let playerHealth;
    if (bonusDefense) {
      playerHealth = player.currentHealth + bonusDefense + player.defense - monsterAttack;
    } else {
      playerHealth = player.currentHealth + player.defense - monsterAttack;
    }
    if (playerHealth <= 0) return this.handleBattleLose();
    if (playerHealth < this.state.playerStats.currentHealth) {

      this.buildBattleDeck(this.state.deck);
      this.setState(prevState => {
        let playerStats = Object.assign({}, prevState.playerStats);
        playerStats.currentHealth = playerHealth;
        return { playerStats }
      });
    }
  }

  handleBattleLose = () => {
    let newHealth = this.state.playerStats.maxHealth;
    let zone = boardArr[this.state.playerLocation-1].zone
    let newLocation;
    if (zone === 1) {
      newLocation = 1;
    } else if (zone === 2) {
      newLocation = 31;
    } else if (zone === 3) {
      newLocation = 61;
    } else if (zone === 4) {
      newLocation = 91;
    } else {
      newLocation = 121;
    }
    this.setState({message: "You lost the battle! You retreat to rethink your attack"})
    this.setState({playerLocation: newLocation })
    this.setState(prevState => {
      let playerStats = Object.assign({}, prevState.playerStats);
      playerStats.currentHealth = newHealth;
      return { playerStats }
    });
  }

  handleBattleWin = () => {
    let stats = ["Max Health", "Attack", "Defense"]
    let upgrade = stats[Math.floor(Math.random() * 3)]
    console.log(upgrade)
    let upgradeAmt = Math.ceil(this.state.playerLocation / 30);
    let msg = `You win! You feel yourself growing stronger.  Your ${upgrade} increases by ${upgradeAmt} points!`
    if (upgrade === "maxHealth") {
      this.setState(prevState => {
        let playerStats = Object.assign({}, prevState.playerStats);
        playerStats.maxHealth += upgradeAmt;
        return { playerStats, message: msg }
    });
    } else if (upgrade === "attack") {
      this.setState(prevState => {
        let playerStats = Object.assign({}, prevState.playerStats);
        playerStats.attack += upgradeAmt;
        return { playerStats, message: msg }
    });
    } else {
      this.setState(prevState => {
        let playerStats = Object.assign({}, prevState.playerStats);
        playerStats.defense += upgradeAmt;
        return { playerStats, message: msg }
    });
    }
  }
 
  render() { 
    return ( 
      <>
        <RollBtn 
          handlePlayerMovement={this.handlePlayerMovement}
        />    
        <Message 
          message={this.state.message}
        /> 
        
        {boardArr[this.state.playerLocation-1].type === "Monster" || boardArr[this.state.playerLocation-1].type === "Boss" ? 
        <Battle 
          monster={this.state.monster}
          deck={this.state.deck}
          playerStats={this.state.playerStats}
          battleDeck={this.state.battleDeck}
          handleBattle={this.handleBattle}
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
