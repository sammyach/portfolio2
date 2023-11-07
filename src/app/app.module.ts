import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillPillComponent } from './skill-pill/skill-pill.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { ProjectArchiveComponent } from './project-archive/project-archive.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    SkillPillComponent,
    FeaturedProjectsComponent,
    ProjectArchiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
