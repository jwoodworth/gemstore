import { Component, OnInit } from '@angular/core';

/* Should be able to remove becuase of changed functionality
import { GemModel } from  '../gemmodel';
import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';
import { HttpClient, HttpHeaders} from '@angular/common/http';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    /* Moved Functionality
cart: cartmodel = {
    totalprice: 0,
    totalquantity: 0,
    items: []
    */
    
    //constructor(private httpClient: HttpClient){ }    

    
    ngOnInit(){
        
        //TODO: pull data from an API here:
        //this.httpClient.get<GemModel[]>('/assets/gems.json').subscribe(results => {this.gems = results });
        
        //Pulled data from hard coded info to file in assest
       // console.log(JSON.stringify(this.gems));    
    }

    //gems : GemModel[];

}