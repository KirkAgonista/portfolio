import { Component, OnInit,  } from '@angular/core';

import { ScrollToAnimationEasing } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;

  public top: boolean = false;
  
  constructor() { 
  
    this.ngxScrollToDuration = 800;
    this.ngxScrollToEasing = 'easeOutElastic';
  
  }
  ngOnInit() {
  }
  
  handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.top = true;
    }
    if (event.isReachingTop) {
      this.top = false;
    }
  } 

}
