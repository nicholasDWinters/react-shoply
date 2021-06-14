import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';

const Product = ({ product, productId }) => {
    const dispatch = useDispatch();

    const add = (price, product) => {
        product = { ...product, id: uuid() }
        dispatch({ type: "ADD-TO-CART", price, product });
    }

    return (
        <div>
            <p style={{ marginBottom: '0' }}>{product.name}</p>
            <button style={{ marginRight: '20px' }} onClick={() => add(product.price, product)}>Add to Cart</button>
            <NavLink exact to={`/products/${productId}`}>View Details</NavLink>
        </div>
    )
}

export default Product;