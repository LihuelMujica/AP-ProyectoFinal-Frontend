import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SocialMediaListComponent } from './components/social-media-list/social-media-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { EducationItemComponent } from './components/education-item/education-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SocialMediaComponent,
    SocialMediaListComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    ExperienceItemComponent,
    EducationItemComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
