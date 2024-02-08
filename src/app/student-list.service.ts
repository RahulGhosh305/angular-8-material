import { Injectable } from "@angular/core";
import { IStudent } from "./student-list/student";

@Injectable({
  providedIn: "root",
})
export class StudentListService {
  constructor() {}

  getStudentList(): IStudent[] {
    return [
      { id: "1", name: "A", gender: "F", dateOfBirth: "01/02/1990" },
      { id: "2", name: "B", gender: "M", dateOfBirth: "01/02/1990" },
      { id: "3", name: "C", gender: "F", dateOfBirth: "01/02/1990" },
      { id: "4", name: "D", gender: "M", dateOfBirth: "01/02/1990" },
    ];
  }
}
