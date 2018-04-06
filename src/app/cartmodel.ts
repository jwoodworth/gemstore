//cartmodel.ts
import { CartItemModel } from './cartitemmodel';

export class CartModel{
    items: CartItemModel[];
    totalquantity: number;
    totalprice: number;
}