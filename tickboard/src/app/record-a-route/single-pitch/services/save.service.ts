import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  public save(country: String, date: String, climbingSpot: String, crag: String, sector: String, 
              route: String, grade: String, style: String, beauty: String, comment: String): boolean {
    console.log(date);
    console.log(country);
    console.log(climbingSpot);
    console.log(crag);
    console.log(sector);
    console.log(route);
    console.log(grade);
    console.log(style);
    console.log(beauty);
    console.log(comment);
    return true;
  }
}
