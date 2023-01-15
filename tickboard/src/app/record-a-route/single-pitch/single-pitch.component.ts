import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SaveService } from './services/save.service';

// Test comment0
@Component({
  selector: 'app-single-pitch',
  templateUrl: './single-pitch.component.html',
  styleUrls: ['./single-pitch.component.css']
})

// Test comment1
export class SinglePitchComponent implements OnInit {

  private saveService: SaveService;
  country: String;
  date: String;
  success: String;

  constructor(private saveServiceExt: SaveService) { 
    this.saveService = saveServiceExt;
    var dt = new DatePipe("en-US").transform(new Date(), "yyyy-MM-dd"); 
    this.date = (dt==null) ? "2022-01-01" : dt.toString();
    this.country = "Deutschland";
    this.success = "";
  }

  ngOnInit(): void {
  }

  save(): void {
    this.date = (<HTMLInputElement>document.getElementById("date")).value;
    this.country = (<HTMLInputElement>document.getElementById("country")).value;
    var climbingSpot = (<HTMLInputElement>document.getElementById("climbing_spot")).value;
    var crag = (<HTMLInputElement>document.getElementById("crag")).value;
    var sector = (<HTMLInputElement>document.getElementById("sector")).value;
    var route = (<HTMLInputElement>document.getElementById("route")).value;
    var grade = (<HTMLInputElement>document.getElementById("grade")).value;
    var style = (<HTMLInputElement>document.getElementById("style")).value;
    var beauty = (<HTMLInputElement>document.getElementById("beauty")).value;
    var comment = (<HTMLInputElement>document.getElementById("comment")).value;
    // save the data
    if (this.saveService.save(this.country, this.date, climbingSpot, crag, sector, route, grade, 
      style, beauty, comment) == true) {
        this.success = "+++ Daten wurden gespeichert +++";
      } else {
        this.success = "!!! ERROR: Daten wurden NICHT gespeichert !!!";
      }
      const fn = async() => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        this.success = "";
      };
      // show the success message for 2 seconds 
      fn();
    };
  }