import { Item } from '../Products';
import {ADD_TO_CART} from './constants';

export function addToCart(item: Item){
    return {
        type:ADD_TO_CART,
        data:item
    }
}