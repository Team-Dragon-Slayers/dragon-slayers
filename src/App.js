import React from 'react';
import './App.css';
import GameBoardOverlay from './GameBoardOverlay';
import GameBoard from './components/Gameboard/Gameboard';


const App = () => {

  const findTypeOfSquare = () => {
    let type = Math.floor(Math.random() * 3);
    if (type === 1){
        return "Monster";
    } else if (type ===2) {
        return "Treasure";
    } else return "Blank"
  }


    return ( 
      <>
      <GameBoard findTypeOfSquare={findTypeOfSquare} />
      <GameBoardOverlay />
      </>
    );
}
 
export default App;
