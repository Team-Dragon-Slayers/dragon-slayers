import React from 'react';
import styles from './SquareSpace.module.css';
import Player from '../Player/Player';

const color = (typeOfSquare) => {
    let color;
    if (typeOfSquare === "Monster") {
        color = "brown";
    } else if (typeOfSquare === "Treasure"){
        color = "gold";
    } else color = "blue";
    return color;
}


const SquareSpace = (props) => {
    return ( 
        <>
         {/* <div className={props.playerLocation ? styles.Player 
         : styles.SquareSpace}
          style={{backgroundColor: color(props.type)}}
         /> */}
        <div className={styles.SquareSpace} style={{backgroundColor: color(props.type)}}>
         {props.playerLocation ? 
             <Player />
             :
             <></>
            }
        </div>
         
        </>
     );
}
 
export default SquareSpace;