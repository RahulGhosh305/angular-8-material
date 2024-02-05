import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  Heading: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  allNames: string[];
  fruit: string;
  LogInName: string;
  isSwitchMode: boolean;
  applyPipe: string;
  dob: Date;
  money: number;
  numberPercentage: number;
  groups: string[];
  digit: number;
  constructor() {}

  ngOnInit() {
    this.Heading = "Details";
    this.firstName = "mPower";
    this.lastName = "Social";
    this.gender = "Organization";
    this.age = 10;
    this.allNames = ["Rahim", "Karim", "Jasim"];
    this.fruit = "";
    this.isSwitchMode = true;
    this.LogInName = "admin";
    this.applyPipe = "Angular 8 learn from youtube";
    this.dob = new Date();
    this.money = 35.3564;
    this.numberPercentage = 0.259;
    this.groups = ["Jasim", "Nazmul", "Karim", "Sajib", "Rajib", "Saju"];
    this.digit = 2314641616;
  }

  isLogIn: boolean = true;
  isLogOut: boolean = false;

  applyLightHandler() {
    this.isSwitchMode = !this.isSwitchMode;
  }

  timeChange = new Observable<string>((observer: any) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
