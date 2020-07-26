import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);

    const total=cart.reduce((total,mem)=>total+mem.income,0);
    
    

    return (
        <div className="cart" >
            <h2>Income Summury </h2>
            <h4>Member Added: {cart.length} </h4>
            <p>Total: {total} </p>
        </div>
    );
};

export default Cart;