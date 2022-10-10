import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import Cart from './../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

import './Orders.css';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    
    const handleRemoveProduct = product => {
       // console.log(product);
        
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>

            <div className="review-items-container">

                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    />)
                }

            </div>
            
            <div className="cart-container">
                <Cart cart={cart} >
                    <Link to='/inventory'>
                        <button>Proceed Checkout</button>
                    </Link>

                </Cart>
            </div>
           
        </div>

        
    );
};

export default Orders;