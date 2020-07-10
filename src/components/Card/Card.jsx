import React from 'react';

import '../Card/Card.css';

const Card = (props) => {
    return ( 
        <div className="Card" style ={{backgroundColor: props.color}}>
        </div>
     );
}
 
export default Card;