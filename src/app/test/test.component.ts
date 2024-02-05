import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  title: string;
  testId: string;
  constructor() {}
  myColor: string = "brown";
  userName: string = "Peter";
  myCSSClass: string = "red";
  applyCSSClass: boolean = true;
  applyFontBoldClass: boolean = true;
  textColor: string = "green";
  fontWg: string = "bold";

  name: string = "";

  ngOnInit() {
    this.title = "Calculating you daily expense";
    this.testId = "myId";
  }

  applyMultipleStyle() {
    var styles = {
      color: this.textColor,
      "font-weight": this.fontWg,
    };
    return styles;
  }
}
