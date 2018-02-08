import { Component, OnInit, Input } from '@angular/core';
import { cartmodel } from '../../cartmodel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() cart:cartmodel;
    
    /* Best way to handle small fairly static  array */
    
 links = [{
        text: 'Home',
        href: '/Home'
    }, {
        text: 'Account',
        href: '/Account'
    }, {
      //  text: 'Cart',
    //    href: '/Cart'
    }];
    
  constructor() { }

  ngOnInit() {
  }
}
