import React from 'react';
import '../CardRow/CardRow.css'
import Card from '../Card/Card';

const CardRow = () => {

    return ( 
        <div className="CardRow">
        <Card color={"white"} />
        <Card color={"orange"} />
        <Card color={"orange"} />
        <Card color={"orange"} />
        </div>
     );
}
 
export default CardRow;