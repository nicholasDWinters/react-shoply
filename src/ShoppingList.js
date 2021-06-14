import React from 'react';
import Product from './Product';


const ShoppingList = ({ products }) => {

    const keyValuePairs = Object.entries(products);

    return (
        <div>
            {keyValuePairs.map(pair =>
                <Product key={pair[0]} product={pair[1]} />
            )}

        </div>
    );
}

export default ShoppingList;