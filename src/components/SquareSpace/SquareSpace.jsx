import React from 'react';
import styles from './SquareSpace.module.css';

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
         <div className={props.playerLocation ? styles.Player 
         : styles.SquareSpace}
          style={{backgroundColor: color(props.type)}}
         />
        </>
     );
}
 
export default SquareSpace;