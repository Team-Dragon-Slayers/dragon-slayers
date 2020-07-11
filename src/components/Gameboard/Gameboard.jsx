import React from 'react';
import styles from './Gameboard.module.css';
import Zone from '../Zone/Zone';
import Player from '../Player/Player';

const zones=[1,2,3,4,5];

const Gameboard = (props) => {
    return ( 
        <div className={styles.GameBoard}>
        {props.playerLocation ?
            zones.map((el)=>
                props.playerLocation.zone === el ?
                <Zone 
                    playerLocation={props.playerLocation}
                    zone={el}
                    findTypeOfSquare={props.findTypeOfSquare}
                    /> :
                <Zone 
                    zone={el}
                    findTypeOfSquare={props.findTypeOfSquare}
                />)
            :
            zones.map((el) =>
            props.findTypeOfSquare ?
            <Zone 
            zone={el}
            findTypeOfSquare={props.findTypeOfSquare} />
            :
            <Zone zone={el} />
            )

        }

        </div>

        // <div className={styles.GameBoard}>
        //     {zones.map((el) =>
        //         <Zone zone={el} 
        //             findTypeOfSquare={props.findTypeOfSquare}
        //         />
        //     )}

        // </div>
            
    );
}
 
export default Gameboard;