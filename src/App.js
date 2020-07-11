import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';
import Player from './components/Player/Player';

class App extends Component {
  state = { 
    playerLocation: {
      zone: 1,
      row: 1,
      space: 1
    }
   }

  //  handlePlayerMovement = (e) => {
  //   e.preventDefault();
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

  handlePlayerMovement= (state,props) => {
    let dieRoll = Math.ceil(Math.random() * 6);
    let newLocation = dieRoll + this.state.playerLocation.space;
    let row = this.state.playerLocation.row;
    let zone = this.state.playerLocation.zone;
    let space = this.state.playerLocation.space;
    if (newLocation > 10){
      row++;
      if(row > 5){  // if exiting zone, stay on last space for boss
        zone++;
      }
      space = newLocation-10;
    }
    else space += dieRoll;
    console.log(dieRoll);

    const actuallySetState = (state, props) => {    
      return  {
      zone: state.playerLocation.zone,
      row: state.playerLocation.row,
      space: state.playerLocation.space
    }}
    this.setState(actuallySetState);
    // console.log(this.state)
  }

  // this.setState(handlePlayerMovement);
 

  render() { 
    return ( 
      <>
      <button type="button" onClick={this.handlePlayerMovement}>Roll Die</button>
      <Gameboard
        // playerLocation={this.state.playerLocation} 
      />
      <CardRow />
      <Player />



      </>
    );
  }
}
 
export default App;
