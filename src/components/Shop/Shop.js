import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect (()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data) )
    },[])

    const handleAddToCart = (product) => {
        // console.log("Product Added ok");
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className='shop_container'>
            <div className="products_container">
            {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                handleAddToCart = {handleAddToCart}
                
                
                ></Product>)
            }

            </div>
            <div className="card_container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>

            </div>
            
        </div>
    );
};

export default Shop;