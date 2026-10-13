import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";

const initialState:any[] = [];
export const reducer = (state = initialState, action:any)=>{
switch(action.type){
    case ADD_TO_CART:
        return [
            ...state,
            action.data
        ]
    case REMOVE_TO_CART:
        let result = state.filter(item=>(item.id!=action.data))
        return [
            ...result
        ]
        default:
            return state
}
}