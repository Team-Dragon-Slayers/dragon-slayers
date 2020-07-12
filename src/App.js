import React, {Component} from 'react';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';
import RollBtn from './components/RollBtn/RollBtn';

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

class App extends Component {

  state = {
    playerLocation: 1
  }

   handlePlayerMovement = () => {
    let dieRoll = Math.ceil(Math.random() * 6);
    if(Math.floor(this.state.playerLocation / 30) !== (Math.floor((this.state.playerLocation + dieRoll) / 30))){
      dieRoll = 30 - (this.state.playerLocation % 30)
    }
    this.setState({ playerLocation: this.state.playerLocation + dieRoll})
    console.log(this.state.playerLocation)
   }

 
  render() { 
    return ( 
      <>
        <RollBtn 
          handlePlayerMovement={this.handlePlayerMovement}
        />
      
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
