import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  /** Transfer data to the server for processing the next steps (saving data in the database) */
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
