import React from 'react';

const DrawCardBtn = (props) => {
    return (  
        <button type="button" onClick={props.addCardToDeck}>Draw Card</button>
    );
}
 
export default DrawCardBtn;