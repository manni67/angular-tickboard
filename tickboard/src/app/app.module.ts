import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglePitchComponent } from './record-a-route/single-pitch/single-pitch.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavigationComponent,
    SinglePitchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'landingpage', component: LandingpageComponent},
      {path: 'record-a-route/single-pitch', component: SinglePitchComponent},
      {path: '', component: LandingpageComponent},
      {path: '', redirectTo: 'landingpage', pathMatch: 'full'},
      {path: '**', component: LandingpageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
