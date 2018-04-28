import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "../window.service";

import { ScrollToAnimationEasing } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;

  public top: boolean = false;
  public topLight: boolean = false;
  public topDark: boolean = false;
  public topBlue: boolean = false;
  public topBorderBottom: boolean = false;
  public hoverTop: boolean = false;
  
  links = [
    {
      url:'https://www.linkedin.com/in/dobrzanski-m92',
      text:'Check out my LinkedIn profile',
      icon: 'fab fa-3x fa-linkedin'
    },
    {
      url:'https://twitter.com/KirkAgonista',
      text:'Find me on Twitter',
      icon: 'fab fa-3x fa-twitter-square'
    },
    {
      url:'https://hangouts.google.com/group/ZUIrSeNJYMbWfmJv2',
      text:'Chat with me on Google Hangout',
      icon: 'fab fa-3x fa-google'
    },
    ];
    
  projects = [
    {
      title: 'Yelp-Camp',
      img: ['../../assets/yelp-camp.png'],
      caption: 'Simple campground app where You can rate your favourite campground and add new.',
      technologies: ['HTML', 'CSS3', 'JS', "MongoDB", "Express", "Node.js"],
      link: "https://yelp-camp-md.herokuapp.com/"
    },
    {
      title: 'Recipe-Book',
      img: ['../../assets/recipe-book.png'],
      caption: 'Create Your own recipes or use existing ones. You can also add ingredients to shopping list.',
      technologies: ['HTML', 'CSS3', 'JS', "Typescript", "MongoDB", "Express", "Node.js", "Angular5"],
      link: "https://angular-recipe-book-md.herokuapp.com/"
    }
  ];
    
  constructor(
     @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window
    ) { 
  
    this.ngxScrollToDuration = 800;
    this.ngxScrollToEasing = 'easeOutElastic';
    
  }
  ngOnInit() {
  }
  
 @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollYPosition = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let scrollYMaxPosition = this.document.body.scrollHeight - this.document.body.clientHeight;
    let scrollYPositionPercentage = (Math.floor(scrollYPosition)/scrollYMaxPosition)*100;
    
    if (scrollYPositionPercentage > 7.57) {
      this.top = true;
    } else if (this.top && scrollYPositionPercentage < 7.57) {
      this.top = false;
    }
    if (scrollYPositionPercentage > 7.57 && scrollYPositionPercentage < 52.8) {
      this.topLight = true;
    } else if (this.topLight && scrollYPositionPercentage < 7.57 || scrollYPositionPercentage > 52.8){
      this.topLight = false;
    }
    if (scrollYPositionPercentage > 52.8 && scrollYPositionPercentage < 59.2) {
      this.topDark = true;
    } else if (this.topDark && scrollYPositionPercentage < 52.8){
      this.topDark = false;
    }
    
    if (scrollYPositionPercentage > 59.2) {
      this.topBlue = true;
    } else if (this.topBlue && scrollYPositionPercentage < 59.2){
      this.topBlue = false;
    }
    
    if (this.hoverTop) {
      this.topBorderBottom = false;
    } else if(Math.floor(scrollYPosition) === scrollYMaxPosition) {
      this.topBorderBottom = true;
    } else if (this.topBorderBottom && Math.floor(scrollYPosition) !== scrollYMaxPosition){
      this.topBorderBottom = false;
    }
  
}
  
  onMouseEnter() {
    this.hoverTop = true;
    this.topBorderBottom = false;
  }
  onMouseLeave() {
    this.hoverTop = false;
    this.onWindowScroll();
  }
}
