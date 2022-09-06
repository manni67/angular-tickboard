import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglePitchComponent } from './record-a-route/single-pitch/single-pitch.component';
import { MultiPitchComponent } from './record-a-route/multi-pitch/multi-pitch.component';
import { BoulderComponent } from './record-a-route/boulder/boulder.component';
import { SportClimbingComponent } from './record-a-day/sport-climbing/sport-climbing.component';
import { AlpineClimbingComponent } from './record-a-day/alpine-climbing/alpine-climbing.component';
import { BoulderingComponent } from './record-a-day/bouldering/bouldering.component';
import { AllClimbsComponent } from './select-data/all-climbs/all-climbs.component';
import { ClimbsOfADayComponent } from './select-data/climbs-of-a-day/climbs-of-a-day.component';
import { ClimbsOfAGradeComponent } from './select-data/climbs-of-a-grade/climbs-of-a-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavigationComponent,
    SinglePitchComponent,
    MultiPitchComponent,
    BoulderComponent,
    SportClimbingComponent,
    AlpineClimbingComponent,
    BoulderingComponent,
    AllClimbsComponent,
    ClimbsOfADayComponent,
    ClimbsOfAGradeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'landingpage', component: LandingpageComponent},
      {path: 'record-a-day/alpine-climbing', component: AlpineClimbingComponent},
      {path: 'record-a-day/sport-climbing', component: SportClimbingComponent},
      {path: 'record-a-day/bouldering', component: BoulderingComponent},
      {path: 'record-a-route/single-pitch', component: SinglePitchComponent},
      {path: 'record-a-route/multi-pitch', component: MultiPitchComponent},
      {path: 'record-a-route/boulder', component: BoulderComponent},
      {path: 'select-data/all-climbs', component: AllClimbsComponent},
      {path: 'select-data/climbs-of-a-day', component: ClimbsOfADayComponent},
      {path: 'select-data/climbs-of-a-grade', component: ClimbsOfAGradeComponent},
      {path: '', component: LandingpageComponent},
      {path: '', redirectTo: 'landingpage', pathMatch: 'full'},
      {path: '**', component: LandingpageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
