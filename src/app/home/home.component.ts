import { Component, OnInit } from "@angular/core";
import { DatafatchingService } from "../datafatching.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public students = [];
  constructor(private _studentService: DatafatchingService) {}

  ngOnInit() {
    this._studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }
}
