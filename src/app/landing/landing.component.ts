import { Component, OnInit } from '@angular/core';
import { ScrollToAnimationEasing } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  
  constructor() { 
  
    this.ngxScrollToDuration = 800;
    this.ngxScrollToEasing = 'easeOutElastic';
  
  }
  ngOnInit() {
  }
  
  
}
