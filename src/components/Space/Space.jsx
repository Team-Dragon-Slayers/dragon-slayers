import React from 'react';
import styles from './Space.module.css';
import Player from '../Player/Player';

const color = (typeOfSquare) => {
    let color;
    if (typeOfSquare === "Monster") {
        color = "brown";
    } else if (typeOfSquare === "Treasure"){
        color = "gold";
    } else if (typeOfSquare === "Boss") {
        color ="purple";
    } else color = "blue";
    return color;
}

const Space = (props) => {
    return (  
        <>
        <div 
            className={styles.SquareSpace} 
            style={{backgroundColor: color(props.type)}}
        >
            {props.playerLocation ? 
            <Player />
            :
            <></>
}              
        </div>
        
       </>
    );
}

 
export default Space;