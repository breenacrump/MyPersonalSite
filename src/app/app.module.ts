import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatSidenavModule, MatListModule, MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
	  ExperienceComponent,
	  ProjectsComponent,
	  ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	  MatTabsModule,
	  MatSidenavModule,
	  MatListModule,
	  MglTimelineModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProjectModalComponent]
})
export class AppModule { }
