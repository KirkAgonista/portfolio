import { Component, OnInit } from '@angular/core';

import { ScrollToAnimationEasing } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  
  public top: boolean = false;
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
      technologies: ['HTML', 'CSS3', 'JS', "MongoDB", "Express", "Node.js"]
    },
    {
      title: 'Recipe-Book',
      img: ['../../assets/recipe-book.png'],
      caption: 'Create Your own recipes or use existing ones. You can also add ingredients to shopping list.',
      technologies: ['HTML', 'CSS3', 'JS', "Typescript", "MongoDB", "Express", "Node.js", "Angular5"]
    }
  ];
    
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
  
  onMouseEnter() {
    this.hoverTop = true;
  }
  onMouseLeave() {
    this.hoverTop = false;
  }
}
