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
  }

  nav2singlePitchData() {
    this.router.navigate(['../record-a-route','single-pitch'])  
  }
}
