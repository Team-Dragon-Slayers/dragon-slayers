import React from 'react';
import styles from './Zone.module.css';
import SquareRow from '../SquareRow/SquareRow';

const arr = [1, 2, 3];

const Zone = (props) => {
    return ( 
        <div className={styles.Zone}>
            {props.playerLocation ?
                arr.map((el)=>
                props.playerLocation.zone === el ?
                <SquareRow 
                    playerLocation={props.playerLocation}
                /> :
                <SquareRow />
                )
            :
            <>
            <SquareRow />
            <SquareRow />
            <SquareRow />
            </>
            }
            {/* {props.playerLocation ? 
            <p>{props.playerLocation.zone}</p> : 
            <p>nothing</p>
        }
            <SquareRow />
            <SquareRow />
            <SquareRow /> */}
        </div>
    );
}
 
export default Zone;