import React from 'react';
import Product from '../Product';
import { UseProduct } from '../AuthProvider';

const Home = () => {
    const{state}=UseProduct();
    const product=state.Product
    console.log(product)
    let content;
    if(state.loading){
        content=<p>Loading.....</p>
    }
    else if(state.error){
        content=<p>Something went wrong</p>
    }
    else if(!state.loading  && !state.error && state.Product.length === 0){
        content=<p>Data is not coming</p>
    }
    else if(!state.loading && !state.error && state.Product.length >0){
        content=<Product product={product}/>
    }
    return (
        <div>
{content}        </div>
    );
};

export default Home;