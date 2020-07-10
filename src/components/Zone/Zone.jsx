import React from 'react';
import styles from './Zone.module.css';
import SquareRow from '../SquareRow/SquareRow';

const Zone = () => {
    return ( 
        <div className={styles.Zone}>
            <SquareRow />
            <SquareRow />
            <SquareRow />
        </div>
    );
}
 
export default Zone;