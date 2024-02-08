import { Component, OnInit } from "@angular/core";
import { StudentListService } from "../student-list.service";
import { IStudent } from "./student";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
  providers: [StudentListService],
})
export class StudentListComponent implements OnInit {
  title: string;
  students: IStudent[];
  constructor(private _studentService: StudentListService) {
    this.students = this._studentService.getStudentList();
  }

  ngOnInit() {
    this.title = "Student List Component Start Here";
  }
}
