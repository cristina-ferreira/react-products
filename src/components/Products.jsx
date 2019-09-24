/* eslint-disable arrow-parens */

import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { products } = props;
    return (
        <div>
            <h1>Products</h1>
            <ol>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
export default Products;
