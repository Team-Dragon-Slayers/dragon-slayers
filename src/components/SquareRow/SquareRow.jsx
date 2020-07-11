import React, { Component } from 'react';
import SquareSpace from '../SquareSpace/SquareSpace';
import '../SquareRow/SquareRow.css'

const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let randomMonster = Math.floor(Math.random() * 10);
let randomTreasure = Math.floor(Math.random() * 10);

const SquareRow = (props) => {
    return (  
        <div className="SquareRow">
             {props.playerLocation ?
                spaces.map((el)=>
                props.playerLocation.space === el ?
                <SquareSpace
                    playerLocation={props.playerLocation}
                    zone={props.zone}
                    row={props.row}
                    space={el}
                /> :
                <SquareSpace 
                    zone={props.zone}
                    row={props.row}
                    space={el}
                    type={randomMonster === el ? "Monster" : "Blank"}
                />
                )
            :
            <>
            {spaces.map((idx) =>
            <SquareSpace 
                zone={props.zone}
                row={props.row}
                space={idx}
                type={randomMonster === idx ? "Monster" : "Blank"}
            />
            )}
            </>
            }
        </div>
    );
}
 
export default SquareRow;