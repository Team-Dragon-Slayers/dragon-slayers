//skylar's code from 7/11 7:54pm

import React from 'react';
import styles from './Zone.module.css';
import SquareRow from '../SquareRow/SquareRow';

const rows = [1, 2, 3];

const Zone = (props) => {
    return ( 
        // <div className={styles.Zone}>
        //     {props.playerLocation ?
        //         rows.map((el)=>
        //         props.playerLocation.row === el ?
        //         <SquareRow 
        //             playerLocation={props.playerLocation}
        //             zone={props.zone}
        //             row={el}

        //         /> :
        //         <SquareRow 
        //             zone={props.zone}
        //             row={el} />
        //         )
        //     :
        //     <>
        //     <SquareRow 
        //         zone={props.zone}
        //         row={rows[0]}
        //     />
        //     <SquareRow 
        //         zone={props.zone}
        //         row={rows[1]}
        //     />
        //     <SquareRow 
        //         zone={props.zone}
        //         row={rows[2]}
        //     />
          
        //     </>
        // </div>

        <div className={styles.SquareRow}>
        {rows.map((el) =>
            <SquareRow 
                zone={props.zone} 
                row={el}
                
            />
        )}
    </div>
    );
}
 
export default Zone;

// import React from 'react';
// import styles from './Zone.module.css';
// import SquareRow from '../SquareRow/SquareRow';

// const rows = [1, 2, 3];

// const Zone = (props) => {
//     return ( 
//         // <div className={styles.Zone}>
//         //     {props.playerLocation ?
//         //         rows.map((el)=>
//         //         props.playerLocation.row === el ?
//         //         <SquareRow 
//         //             playerLocation={props.playerLocation}
//         //             zone={props.zone}
//         //             row={el}

//         //         /> :
//         //         <SquareRow 
//         //             zone={props.zone}
//         //             row={el} />
//         //         )
//         //     :
//         //     <>
//         //     <SquareRow 
//         //         zone={props.zone}
//         //         row={rows[0]}
//         //     />
//         //     <SquareRow 
//         //         zone={props.zone}
//         //         row={rows[1]}
//         //     />
//         //     <SquareRow 
//         //         zone={props.zone}
//         //         row={rows[2]}
//         //     />
          
//         //     </>
//         // </div>

//         <div className={styles.SquareRow}>
//         {rows.map((el) =>
//             <SquareRow 
// <<<<<<< skylar
// <!--                 zone={props.zone} 
//                 row={el} -->
                
// <!--             /> -->
// =======
//             zone={props.zone} 
//             row={el}
//             findTypeOfSquare={props.findTypeOfSquare}
//             />

// >>>>>>> master
//         )}
//     </div>
//     );
// }
 
// export default Zone;