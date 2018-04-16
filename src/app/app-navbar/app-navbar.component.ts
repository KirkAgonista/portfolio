import { Component, OnInit } from '@angular/core';
import { ScrollToAnimationEasing } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
  status: boolean = false;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  
  constructor() { 
    
    this.ngxScrollToDuration = 800;
    this.ngxScrollToEasing = 'easeOutElastic';
    
  }

  ngOnInit() {
  }
  
  onShowHideMenu() {
    this.status = !this.status;
  }
}
