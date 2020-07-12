import React from 'react';
import styles from './Gameboard.module.css';
import Zone from '../Zone/Zone';
import Player from '../Player/Player';
import Space from '../Space/Space';

// // const zones=[1,2,3,4,5];

// // const Gameboard = (props) => {
// //     return ( 
// //         // <div className={styles.GameBoard}>
// //         // {zones.map((el)=>
// //         //     props.playerLocation.zone === el ?
// //         //     <Zone 
// //         //         playerLocation={props.playerLocation}
// //         //         zone={el}
// //         //     /> :
// //         //     <Zone zone={el}
            
// //         //     />
// //         // )}

// //         // </div>

// <<<<<<< skylar
// //         <div className={styles.GameBoard}>
// //             {zones.map((el) =>
// //                 <Zone 
// //                     zone={el}  
                    
// //                 />
// //             )}
// //         </div>
    
// //     );
// // }
 
// // export default Gameboard;
// =======
// <!--         <div className={styles.GameBoard}> -->
// <!--             {zones.map((el) =>
//                 <Zone zone={el} 
//                     findTypeOfSquare={props.findTypeOfSquare}
//                 />
//             )} -->
// >>>>>>> master

const Gameboard = (props) => {
    return ( 
       <div className={styles.GameBoard}>
            {props.boardArr.map((el) =>
                props.playerLocation === el.id ?
                <Player 
                    id={el.id}
                    zone={el.zone}
                    row={el.row}
                    space={el.space}
                    type={el.type} 
                /> :
                <Space
                    id={el.id}
                    zone={el.zone}
                    row={el.row}
                    space={el.space}
                    type={el.type} 
            />
            )}
        </div>
    
    );
}
 
export default Gameboard;