import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private router: Router;
  hidden: boolean;

  constructor(router: Router) { 
    this.router = router;
    this.hidden = false;
  }

  ngOnInit(): void {
  }

  nav2singlePitchData() {
    this.router.navigate(['../record-a-route','single-pitch'])  
    this.hidden = true;
  }

  nav2landingpage() {
    this.router.navigate(['../','landingpage'])
  }
}
