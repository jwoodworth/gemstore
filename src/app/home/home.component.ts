import { Component, OnInit } from '@angular/core';
import { GemModel } from '../gemmodel';
import { GemsService } from '../gems.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    gems: GemModel[];
    
    constructor(private gemsService: GemsService) {
    }

  ngOnInit() {
    this.gemsService.getGems().subscribe(results => {this.gems = results;});  
  }

}
