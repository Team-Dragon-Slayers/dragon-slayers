import React, { Component } from 'react';
import SquareSpace from '../SquareSpace/SquareSpace';
import '../SquareRow/SquareRow.css'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const SquareRow = (props) => {
    return (  
        <div className="SquareRow">
             {props.playerLocation ?
                arr.map((el)=>
                props.playerLocation.space === el ?
                <SquareSpace
                    playerLocation={props.playerLocation}
                /> :
                <SquareSpace />
                )
            :
            <>
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            <SquareSpace />
            </>
            }
        </div>
    );
}
 
export default SquareRow;