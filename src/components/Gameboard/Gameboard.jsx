import React from 'react';
import styles from './Gameboard.module.css';
import Zone from '../Zone/Zone';


const Gameboard = (props) => {
    return ( 
        <div className={styles.GameBoard}>
            <Zone/>
            <Zone/>
            <Zone/>
            <Zone/>
            <Zone/>

        </div>
    );
}
 
export default Gameboard;