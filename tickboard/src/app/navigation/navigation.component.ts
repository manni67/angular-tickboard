import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private router: Router;
  
  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    // nothing to do, empty
  }

  nav2alpineDayData() {
    this.router.navigate(['../record-a-day','alpine-climbing'])  
  }

  nav2sportDayData() {
    this.router.navigate(['../record-a-day','sport-climbing'])  
  }

  nav2boulderingDayData() {
    this.router.navigate(['../record-a-day','bouldering'])  
  }

  nav2singlePitchData() {
    this.router.navigate(['../record-a-route','single-pitch'])  
  }

  nav2multiPitchData() {
    this.router.navigate(['../record-a-route','multi-pitch'])  
  }

  nav2boulderData() {
    this.router.navigate(['../record-a-route','boulder'])  
  }

  nav2selectAllClimbs() {
    this.router.navigate(['../select-data','all-climbs'])  
  }

  nav2selectClimbsOfDay() {
    this.router.navigate(['../select-data','climbs-of-a-day'])  
  }

  nav2selectClimbsOfGrade() {
    this.router.navigate(['../select-data','climbs-of-a-grade'])  
  }

  nav2landingpage() {
    this.router.navigate(['../','landingpage'])
  }
}
