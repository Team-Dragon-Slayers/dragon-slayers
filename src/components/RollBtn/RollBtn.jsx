import React from 'react';

const RollBtn = (props) => {
    return (
        <button type="button" onClick={props.handlePlayerMovement}>Roll Die</button>
    );
}
 
export default RollBtn;