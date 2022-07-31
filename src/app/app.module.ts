import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SocialMediaListComponent } from './components/social-media-list/social-media-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SocialMediaComponent,
    SocialMediaListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
