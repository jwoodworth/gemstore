import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gemmodel';
import { ReviewModel } from '../reviewmodel';

import { AvatarService } from '../avatar.service';




@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    @Input() gem:GemModel;
    newReview: ReviewModel;
    
  constructor(private avatarService: AvatarService) { 
  }

    submitClicked() {        
        this.gem.reviews.push(this.newReview);
        this.ngOnInit();
    }
    

  ngOnInit() {
      this.newReview={
          id: -1,
          createddate:"",
          body: "",
          rating: 4,
          author:""
      };
  }

}
