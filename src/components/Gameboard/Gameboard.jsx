import React from 'react';
import styles from './Gameboard.module.css';
import Zone from '../Zone/Zone';

const arr=[1,2,3,4,5];

const Gameboard = (props) => {
    return ( 
        <div className={styles.GameBoard}>
        {/* { props.playerLocation.zone = 1 ? 
            <Zone
                playerLocation={props.playerLocation}
            />
            :
            <>
            <Zone/>
            <Zone/>
            <Zone/>
            <Zone/>
            <Zone/>
            </>
        } */}
        {arr.map((el)=>
            props.playerLocation.zone = el ?
            <Zone 
                playerLocation={props.playerLocation}
            /> :
            <Zone 
            
            />
        )}

        </div>
    );
}
 
export default Gameboard;