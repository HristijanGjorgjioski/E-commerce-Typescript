import React from 'react';
import { Wrapper } from './Cart.styles'

import CartItem from './CartItem/CartItem';
import { CartItemType } from '../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {!cartItems.length && <p>No Items in the Cart</p>}
            {cartItems.map((item) => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart
