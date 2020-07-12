//skylar's last commit from 7/11 7:54pm

import React, { Component } from 'react';
import SquareSpace from '../SquareSpace/SquareSpace';
import '../SquareRow/SquareRow.css'

const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const randomNum = (n) => {
    return Math.floor(Math.random() * n);
}
const typeOfSquare = () => {
    let type = randomNum(3);
    if (type === 1){
        return "Monster";
    } else if (type ===2) {
        return "Treasure";
    } else return "Blank"
}

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
                    type={typeOfSquare()}
                    
                /> :
                <SquareSpace 
                    zone={props.zone}
                    row={props.row}
                    space={el}
                    type={typeOfSquare()}
                    
                />
                )
            :
            <>
            {spaces.map((el) =>
            <SquareSpace 
                zone={props.zone}
                row={props.row}
                space={el}
                type={typeOfSquare()}
                boardArr={props.boardArr}
            />
            )}
            </>
            }
        </div>
    );
}
 
export default SquareRow;

////////////////////////

// import React, { Component } from 'react';
// import SquareSpace from '../SquareSpace/SquareSpace';
// import '../SquareRow/SquareRow.css'

// const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const SquareRow = (props) => {
//     return (  
//         <div className="SquareRow">
//              {props.playerLocation ?
//                 spaces.map((el)=>
//                 props.playerLocation.space === el ?
//                 <SquareSpace
//                     playerLocation={props.playerLocation}
//                     zone={props.zone}
//                     row={props.row}
//                     space={el}
// <<<<<<< skylar
// <!--                     type={typeOfSquare()} -->
                    
// =======
//                     type={props.findTypeOfSquare()}
// >>>>>>> master
//                 /> :
//                 <SquareSpace 
//                     zone={props.zone}
//                     row={props.row}
//                     space={el}
// <<<<<<< skylar
// <!--                     type={typeOfSquare()} -->
                    
// =======
//                     type={props.findTypeOfSquare()}

// >>>>>>> master
//                 />
//                 )
//             :
//             <>
//             {spaces.map((el) =>
//             <SquareSpace 
//                 zone={props.zone}
//                 row={props.row}
//                 space={el}
// <<<<<<< skylar
// <!--                 type={typeOfSquare()}
//                 boardArr={props.boardArr} -->
// =======
//                 type={props.findTypeOfSquare()}
// >>>>>>> master
//             />
//             )}
//             </>
//             }
//         </div>
//     );
// }
 
// export default SquareRow;