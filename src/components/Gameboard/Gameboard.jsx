import React from 'react';
import styles from './Gameboard.module.css';
import Space from '../Space/Space';

const Gameboard = (props) => {
    return ( 
       <div className={styles.GameBoard}>
            {props.boardArr.map((el) =>
                props.playerLocation === el.id ?
                <Space
                    id={el.id}
                    zone={el.zone}
                    row={el.row}
                    space={el.space}
                    type={el.type} 
                    playerLocation={props.playerLocation}
                />
                :
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