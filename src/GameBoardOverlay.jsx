import React, {useEffect, useState} from 'react';
import Gameboard from './components/Gameboard/Gameboard'
import CardRow from './components/CardRow/CardRow';

const GameBoardOverlay = () => {

  const [playerLocation, setPlayerLocation] = useState({zone: 1, row: 1, space: 1});

  const handlePlayerMovement = () => {
      let dieRoll = Math.ceil(Math.random() * 6);
      let newLocation = dieRoll + playerLocation.space;
      let row = playerLocation.row;
      let zone = playerLocation.zone;
      let space = playerLocation.space;
      if (newLocation > 10){
        row++;
        if(row > 5){  // if exiting zone, stay on last space for boss
          zone++;
        }
        space = newLocation-10;
      }
      else space += dieRoll;
      setPlayerLocation({
        zone, row, space
      });
  }
  

  useEffect(() => {
    handlePlayerMovement();
  }, []);

  // const handlePlayerMovement = () => {
  //   let dieRoll = Math.ceil(Math.random() * 6);
  //   let newLocation = dieRoll + playerLocation.space;
  //   let row = playerLocation.row;
  //   let zone = playerLocation.zone;
  //   let space = playerLocation.space;
  //   if (newLocation > 10){
  //     row++;
  //     if(row > 5){  // if exiting zone, stay on last space for boss
  //       zone++;
  //     }
  //     space = newLocation-10;
  //   }
  //   else space += dieRoll;
  //   setPlayerLocation({
  //     zone: zone, row: row, space: space
  //   });
  // }
  

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

  //  setPlayerLocation = (state,props) => {
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

    return ( 
      <>
      <button type="button" onClick={() => handlePlayerMovement()}>Roll Die</button>
      <Gameboard 
        playerLocation={playerLocation} />
      <CardRow />



      </>
    );
    }
 
export default GameBoardOverlay;
