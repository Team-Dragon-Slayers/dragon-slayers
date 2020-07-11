import React from 'react';
import styles from './Space.module.css';

const color = (typeOfSquare) => {
    let color;
    if (typeOfSquare === "Monster") {
        color = "brown";
    } else if (typeOfSquare === "Treasure"){
        color = "gold";
    } else color = "blue";
    return color;
}

const Space = (props) => {
    return (  
        <>
       <div 
        className={styles.SquareSpace} 
        style={{backgroundColor: color(props.type)}}>

       </div>
        
       </>
    );
}

 
export default Space;