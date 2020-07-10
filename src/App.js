import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <Gameboard />
      <CardRow />
      </>
    );
  }
}
 
export default App;
