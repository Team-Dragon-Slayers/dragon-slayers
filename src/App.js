import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';

class App extends Component {
  state = { 
    playerLocation: 1
   }

   handlePlayerMovement = () => {
    let dieRoll = Math.ceil(Math.random() * 6);
    let newLocation = dieRoll + this.state.playerLocation;
    console.log(dieRoll);
    this.setState({
      playerLocation: newLocation
    });
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
