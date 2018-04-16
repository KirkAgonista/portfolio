import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollEventModule } from 'ngx-scroll-event';
import { MatTooltipModule, MatButtonModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollEventModule,
    ScrollToModule.forRoot(),
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
