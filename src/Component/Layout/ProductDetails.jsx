import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id}=useParams();
    console.log(id);
    return (
        <div>
            Product
        </div>
    );
};

export default ProductDetails;