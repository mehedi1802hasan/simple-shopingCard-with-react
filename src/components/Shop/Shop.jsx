import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Products from '../Products/Products';
import "./Shop.css";

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [card,setCard ]=useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    const handleAddToCard=(product)=>{
    const newCard=[...card,product];
    setCard(newCard);
    }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product=> <Products key={product.id} product={product} handleAddToCard={handleAddToCard} ></Products> )
               }
            </div>
            <div className='card-container'>
           <Card card={card}></Card>      
         </div>
             
        </div>
    );
};

export default Shop;