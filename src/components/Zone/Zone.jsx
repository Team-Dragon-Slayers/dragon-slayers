import React from 'react';
import styles from './Zone.module.css';
import SquareSpace from '../SquareSpace/SquareSpace';

const Zone = () => {
    return ( 
        <div className={styles.Zone}>
            <h2>Zone</h2>
            <SquareSpace />
        </div>
    );
}
 
export default Zone;