import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {img, name,seller, ratings, quantity, stock,price} = props.product|| {};

    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
           {/* <h2>{name}</h2> */}
           <img src={img} alt="" />
           <div className='product_info'>
               <h6 className='product_name'>{name}</h6>
               <p>Price: {price}</p>
               <p>Manufacturer: {seller} </p>
               <p>Rating: {ratings}</p>
           </div>
           <button onClick={() => handleAddToCart(props.product)} className='btn_cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
           </button>
          
            
        </div>
    );
};

export default Product;