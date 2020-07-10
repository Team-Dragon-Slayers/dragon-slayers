import React, { Component } from 'react';
import SquareSpace from '../SquareSpace/SquareSpace';
import '../SquareRow/SquareRow.css'

const SquareRow = () => {
    return (  
        <div className="SquareRow">
        <SquareSpace />
        <SquareSpace />
        <SquareSpace />
        <SquareSpace />
        <SquareSpace />
        <SquareSpace />
        <SquareSpace />
        </div>
    );
}
 
export default SquareRow;