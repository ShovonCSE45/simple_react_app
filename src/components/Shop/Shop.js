import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart} from '../../utilities/fakedb'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect (()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data) )
    },[])

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id
        for(const id in storedCart) {
            // step 2: get the product using id
            const addedProduct = products.find(product => product.id ===id)
            if(addedProduct) {
                // step 3: get quentity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);

            }  
            console.log("added Products",addedProduct);     

        }
        setCart(savedCart);
    } ,[products])

    const handleAddToCart = (product) => {
        // console.log("Product Added ok");
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        

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
                <Cart cart = {cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;