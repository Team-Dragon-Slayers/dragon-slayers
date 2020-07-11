import React from 'react';
import styles from './SquareSpace.module.css';

const SquareSpace = (props) => {
    return ( 
        <>
         <div className={props.playerLocation ? styles.Player : styles.SquareSpace}
         />
         
        </>
     );
}
 
export default SquareSpace;