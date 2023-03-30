import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Products.css"
const Products = (props) => {
    //console.log(props.product)
    const{img,name,price,seller,quantity,ratings}=props.product
    const handleAddToCard=props.handleAddToCard 
  
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className='product-info'>
        <h3 className='product-name'>{name}</h3>
        <i>Price: {price}</i>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}star</p>
        <button onClick={()=>handleAddToCard(props.product)} className='addToCardBtn'>
            Add TO Card  <FontAwesomeIcon icon={faShoppingCart} />
      </button>
        </div>
        </div>
    );
};

export default Products;