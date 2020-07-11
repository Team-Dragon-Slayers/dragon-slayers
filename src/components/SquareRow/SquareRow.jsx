import React, { Component } from 'react';
import SquareSpace from '../SquareSpace/SquareSpace';
import '../SquareRow/SquareRow.css'

const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
                    type={props.findTypeOfSquare()}
                /> :
                <SquareSpace 
                    zone={props.zone}
                    row={props.row}
                    space={el}
                    type={props.findTypeOfSquare()}

                />
                )
            :
            <>
            {spaces.map((el) =>
            <SquareSpace 
                zone={props.zone}
                row={props.row}
                space={el}
                type={props.findTypeOfSquare()}
            />
            )}
            </>
            }
        </div>
    );
}
 
export default SquareRow;