import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Reducer, initialState } from "../State/Reduce";
import { ActionPropertyValue } from "../State/Actiontype";

export const ProductProvider=createContext();

export function AuthProvider({ children }) {
const[state,dispatch]=useReducer(Reducer,initialState)

const[data,setData]=useState([]);
  useEffect(()=>{
    dispatch({type:ActionPropertyValue.FetchStart})
    fetch('Hadith.json')
    .then(res=>res.json())
    .then(data=>{console.log(data);dispatch({type:ActionPropertyValue.FetchSuccess,payload:data})})
    .error=()=>{dispatch({type:ActionPropertyValue.FetchError})}
  },[])
const value={state,dispatch}
  return (
    <ProductProvider.Provider value={value}>
{children}
    </ProductProvider.Provider>
      
    
  )
}





export  const UseProduct=()=>{
     const context=useContext(ProductProvider);
     return context;

}