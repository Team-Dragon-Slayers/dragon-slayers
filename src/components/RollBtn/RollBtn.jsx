import React from 'react';
import './RollBtn.css'

const RollBtn = (props) => {
    return (
        <div className="RollBtn">
            <button type="button" onClick={props.handlePlayerMovement}>Roll Die</button>
        </div>
    );
}
 
export default RollBtn;