import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';
import Player from './components/Player/Player';
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
  // state = { 
  //   playerLocation: {
  //     zone: 1,
  //     row: 1,
  //     space: 1
  //   },
  //   playerLocation2: 1
  //  }

  state = {
    playerLocation: 1
  }

   handlePlayerMovement = () => {
    let dieRoll = Math.ceil(Math.random() * 6);
    this.setState({ playerLocation: this.state.playerLocation + dieRoll})
    console.log(this.state.playerLocation)
   }

   //DID NOT USE THIS/////////////////
  //  handlePlayerMovement = (e) => {
  //   // e.preventDefault();
  //   let dieRoll = Math.ceil(Math.random() * 6);
  //   let newLocation = dieRoll + this.state.playerLocation.space;
  //   let row = this.state.playerLocation.row;
  //   let zone = this.state.playerLocation.zone;
  //   let space = this.state.playerLocation.space;
  //   if (newLocation > 10){
  //     row++;
  //     if(row > 5){  // if exiting zone, stay on last space for boss
  //       zone++;
  //     }
  //     space = newLocation-10;
  //   }
  //   else space += dieRoll;
  //   console.log(dieRoll);
    
  //   this.setState({
  //     playerLocation: {zone: zone, row: row, space: space}
      
  //   });
  //   console.log(this.state)
  // }
  //////////////////////////

  // handlePlayerMovement= (state,props) => {
  //   let dieRoll = Math.ceil(Math.random() * 6);
  //   let newLocation = dieRoll + this.state.playerLocation.space;
  //   let row = this.state.playerLocation.row;
  //   let zone = this.state.playerLocation.zone;
  //   let space = this.state.playerLocation.space;
  //   if (newLocation > 10){
  //     row++;
  //     if(row > 5){  // if exiting zone, stay on last space for boss
  //       zone++;
  //     }
  //     space = newLocation-10;
  //   }
  //   else space += dieRoll;
  //   console.log(dieRoll);

  //   const actuallySetState = (state, props) => {    
  //     return  {
  //     zone: state.playerLocation.zone,
  //     row: state.playerLocation.row,
  //     space: state.playerLocation.space
  //   }}
  //   this.setState(actuallySetState);
  //   // console.log(this.state)
  // }

  // this.setState(handlePlayerMovement);
 
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
      <Player />



      </>
    );
  }
}
 
export default App;
