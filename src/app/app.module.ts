import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatSidenavModule, MatListModule } from '@angular/material';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { MglTimelineModule } from 'angular-mgl-timeline';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
	ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatTabsModule,
	MatSidenavModule,
	MatListModule,
	MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
