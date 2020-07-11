import React from 'react';
import styles from './SquareSpace.module.css';

const SquareSpace = (props) => {
    return ( 
        <>
         <div className={props.playerLocation ? styles.Player 
         : styles.SquareSpace}>

         {props.zone === 1 ? <p>Treasure</p> : <p>M</p>}
         </div>
         

        </>
     );
}
 
export default SquareSpace;