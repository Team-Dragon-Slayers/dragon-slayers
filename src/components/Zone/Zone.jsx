import React from 'react';
import styles from './Zone.module.css';
import SquareRow from '../SquareRow/SquareRow';

const Zone = (props) => {
    return ( 
        <div className={styles.Zone}>
            {/* {props.playerLocation.zone ? 
            <p>{props.playerLocation.zone}</p> : 
            <p>nothing</p>
        } */}
            {/* {props.playerLocation.zone} */}
            <SquareRow />
            <SquareRow />
            <SquareRow />
        </div>
    );
}
 
export default Zone;