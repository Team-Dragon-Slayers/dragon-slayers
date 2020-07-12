import React from 'react';
import './Player.css'

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

const Player = (props) => {
    return (
        <div className="Player"
        style={{backgroundColor: color(props.type)}}>

        </div>
    );
}
 
export default Player
