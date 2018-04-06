import { Injectable } from '@angular/core';

import { CartModel } from './cartmodel';
@Injectable()
export class CartService {

    cart: CartModel;
    constructor() {
        this.cart = {
            totalprice: 0,
            totalquantity: 0,
            items: []
        };
    }
}