import { ActionPropertyValue } from "./Actiontype"

export const initialState={
    loading:false,
    Product:[],
    error:false,
    addToCart:[]
}

export const Reducer=(state,action)=>{
    if(action.type === ActionPropertyValue.FetchStart){
        return {...state,loading:true}
    }
    else if(action.type === ActionPropertyValue.FetchSuccess){
        return {...state,Product:action.payload,loading:false}
    }
    else if (action.type === ActionPropertyValue.FetchError){
        return {...state,error:true,loading:false}
    }
    else if(action.type === ActionPropertyValue.AddToCart){
        return {...state, addToCart:action.cartData, loading:false}
    }

}