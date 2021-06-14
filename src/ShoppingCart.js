import React from 'react';
import { useDispatch } from 'react-redux';

const ShoppingCart = ({ cart, total }) => {
    const dispatch = useDispatch();
    const remove = (id, price) => dispatch({ type: "REMOVE-FROM-CART", id, price });

    return (
        <div>

            {cart.map(item =>
                <div key={item.id}>
                    <p key={item.id}>{item.name}</p>
                    <button onClick={() => remove(item.id, item.price)}>Remove From Cart</button>
                </div>
            )}

            <h2>{total.toFixed(2)}</h2>
        </div>
    );
}

export default ShoppingCart;