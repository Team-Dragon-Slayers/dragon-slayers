import React from 'react';
import styles from './Zone.module.css';
import SquareRow from '../SquareRow/SquareRow';

const rows = [1, 2, 3];

const Zone = (props) => {
    return ( 
        <div className={styles.Zone}>
            {props.playerLocation ?
                rows.map((el)=>
                props.playerLocation.row === el ?
                <SquareRow 
                    playerLocation={props.playerLocation}
                    zone={props.zone}
                    row={el}
                    findTypeOfSquare={props.findTypeOfSquare}

                /> :
                <SquareRow 
                    zone={props.zone}
                    row={el} 
                    findTypeOfSquare={props.findTypeOfSquare}
                    />
                )
            :
            <>
            <SquareRow 
                zone={props.zone}
                row={rows[0]}
                findTypeOfSquare={props.findTypeOfSquare}
            />
            <SquareRow 
                findTypeOfSquare={props.findTypeOfSquare}
                zone={props.zone}
                row={rows[1]}
            />
            <SquareRow 
                zone={props.zone}
                row={rows[2]}
          findTypeOfSquare={props.findTypeOfSquare}
            />
          
            </>
        }
        </div>

    //     <div className={styles.SquareRow}>
    //     {rows.map((el) =>
    //         <SquareRow 
    //         zone={props.zone} 
    //         row={el}
    //         findTypeOfSquare={props.findTypeOfSquare}
    //         />

    //     )}
    // </div>
    );
}
 
export default Zone;