import React from 'react';
import styles from './Zone.module.css';
import SquareSpace from '../SquareSpace/SquareSpace';

const Zone = () => {
    return ( 
        <div className={styles.Zone}>
            <SquareSpace />
        </div>
    );
}
 
export default Zone;