import { Component, OnInit } from '@angular/core';

import { GemModel } from  '../gemmodel';

import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
cart: cartmodel = {
    totalprice: 0,
    totalquantity: 0,
    items: []
}
    
    ngOnInit(){
        
        //TODO: pull data from an API here:
        
        
        //Pulled data from hard coded info to file in assest
       // console.log(JSON.stringify(this.gems));    
    }

    gems : GemModel[] = [{
        id: 1,
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-01.gif',
        inventory: 10,
        colors: ["red","blue","green"],
        reviews: [{
            id: 1,
            createddate: 'Tuesday',
            author: 'joe@codingtemple.com',
            rating: 5,
            body: 'I love this product!'
        },{
             id: 2,
             createddate: 'Wednesday',
             author: 'ripalp@codingtemple.com',
             rating: 1,
             body: 'I hate this product'
         }]},{
        id: 2,
        name: 'Pentagonal',
        price: 5.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-02.gif',
        inventory: 0,
        colors: ["yellow","orange"],
        reviews:[]
    },{
                         
        id: 3,
        name: 'Octagonal',
        price: 4.35,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-03.gif',
        inventory: 5,
        colors: ["white", "pink", "blue"],
        reviews:[]
    },{
        id: 4,
        name: 'Hexagonal',
        price: 6.75,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-04.gif',
        inventory: 5,
        colors: ["white", "pink", "blue"],
        reviews:[]
        
    },{
                         
        id: 5,
        name: 'Squareagonal',
        price: 12.50,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-05.gif',
        inventory: 10,
        colors: ["red","blue","green"],
        reviews:[]
    }]
    
};
