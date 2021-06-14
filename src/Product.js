import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const add = (price, product) => {
        product = { ...product, id: uuid() }
        dispatch({ type: "ADD-TO-CART", price, product });
    }

    return (
        <div>
            <p style={{ marginBottom: '0' }}>{product.name}</p>
            <button onClick={() => add(product.price, product)}>Add to Cart</button>

        </div>
    )
}

export default Product;