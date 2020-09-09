import { ADD_TO_CART } from "../actions/productaction"

var initalState={
    cartItems:[]
}

export const product=(state=initalState,action)=>{
    console.log(JSON.stringify(action))
    switch(action.type){
    case ADD_TO_CART:return
    }
}