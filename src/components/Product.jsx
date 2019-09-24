import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { products } = props;
    const idFromUrl = props.match.params.id;
    const product = products.find(prod => prod.id === idFromUrl);
    return (
        <div>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <Link to="/products">Back to Products</Link>
        </div>
    );
};

export default Product;
