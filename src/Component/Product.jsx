import React from 'react';
import { UseProduct } from './AuthProvider';
import { ActionPropertyValue } from '../State/Actiontype';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
   const {state,dispatch}=UseProduct();

    return (
        <div>
            {
                product.map(index=><div key={index.id} style={{border:"1px solid black",padding:20,background:"pink"}}>
<div>{index.HadisBookName}</div>
<div>{index.BookName}</div>
<div>{index.Narrated}</div>
<div>{index.Hadisth_English}</div>
<button onClick={()=>dispatch({type:ActionPropertyValue.AddToCart,cartData:state.Product})}><Link to={`/Productdetails/${index.id}`}>Add to cart</Link>  </button>


                </div>)
            }
        </div>
    );
};

export default Product;