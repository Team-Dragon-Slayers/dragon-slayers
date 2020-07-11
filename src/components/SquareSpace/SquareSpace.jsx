import React from 'react';
import styles from './SquareSpace.module.css';

const SquareSpace = (props) => {

    let randomMonster = Math.floor(Math.random() * 10);
    let randomTreasure = Math.floor(Math.random() * 10);

    return ( 
        <>
         <div className={props.playerLocation ? styles.Player 
         : styles.SquareSpace}
          style={{backgroundColor: props.type === "Monster" ? "brown" : "blue"}}
         >

         {/* {props.type === randomMonster ? <p className={styles.Monster}>M</p> : <div></div>} */}
         {props.space === randomTreasure ? <p>T</p> : <p></p>}
         </div>
         

        </>
     );
}
 
export default SquareSpace;