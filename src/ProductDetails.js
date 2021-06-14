import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const ProductDetails = ({ products }) => {
    const { id } = useParams();

    let idx = Object.keys(products).indexOf(id);
    let product = Object.values(products)[idx];
    let dispatch = useDispatch();

    const add = (price, product) => {
        product = { ...product, id: uuid() }
        dispatch({ type: "ADD-TO-CART", price, product });
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <h2>Price: {product.price}</h2>
            <h4>{product.description}</h4>
            <img style={{ width: '400px' }} src={product.image_url} alt={product.name}></img>
            <button onClick={() => add(product.price, product)}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;