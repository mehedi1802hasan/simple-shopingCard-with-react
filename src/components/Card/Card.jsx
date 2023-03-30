import React from 'react';
import "./Card.css"
const Card = (props) => {
    const card=props.card;
    let total=0;
    let totalShipping=0;
    for(const productii of card){
        total=total + productii.price;
        totalShipping=totalShipping + productii.shipping;
    }
    const tex=total*7/100;
    const grandTotal=total+totalShipping+tex;
    console.log(card)
    return (
        <div>
                <h3 className='card-title'>Order Summary</h3>
               <div className="card-info">
               <h4>Selected Items: {card.length} </h4>
               <h4>Total Price: {total}</h4>
               <h4>Total Shipping Charge: ${totalShipping}</h4>
               <h4>Tex: ${tex.toFixed(2)}</h4>
               <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
               </div>
        </div>
    );
};

export default Card;