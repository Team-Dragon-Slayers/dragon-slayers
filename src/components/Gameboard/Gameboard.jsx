import React from 'react';
import styles from './Gameboard.module.css';
import Space from '../Space/Space';

const Gameboard = (props) => {
    return ( 
       <div className={styles.GameBoard}>
            {props.boardArr.map((el, idx) =>
                props.playerLocation === el.id ?
                <Space
                    key={idx}
                    id={el.id}
                    zone={el.zone}
                    row={el.row}
                    space={el.space}
                    type={el.type} 
                    playerLocation={props.playerLocation}
                />
                :
                <Space
                    key={idx}
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