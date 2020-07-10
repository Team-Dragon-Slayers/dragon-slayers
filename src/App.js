import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';

class App extends Component {
  state = { 
    // playerLocation: 1,
    playerLocation: {
      zone: 1,
      row: 1,
      space: 1
    },
    test: ''
   }

   handlePlayerMovement = () => {
    let dieRoll = Math.ceil(Math.random() * 6);
    let newLocation = dieRoll + this.state.playerLocation.space;
    let row = this.state.playerLocation.row;
    let zone = this.state.playerLocation.zone;
    let space = this.state.playerLocation.space;
    if (newLocation > 10){
      row++;
      if(row > 3){  // if exiting zone, stay on last space for boss
        zone++;
      }
      space = newLocation-10;
    }
    else space += dieRoll;
    console.log(dieRoll);
    this.setState({
      playerLocation: {zone: zone, row: row, space: space}
      
    });
    console.log(this.state)
  }
 

  render() { 
    return ( 
      <>
      <button onClick={this.handlePlayerMovement}>Roll Die</button>
      <Gameboard />
      <CardRow />
      </>
    );
  }
}
 
export default App;
