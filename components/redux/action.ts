import type { Item } from '../Products';
import {ADD_TO_CART, REMOVE_TO_CART} from './constants';

export function addToCart(item: Item){
    return {
        type:ADD_TO_CART,
        data:item
    }
}
export function removeToCart(itemId: number){
    return {
        type:REMOVE_TO_CART,
        data:itemId
    }
}