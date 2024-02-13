import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IStudent } from "./student-list/student";
@Injectable({
  providedIn: "root",
})
export class DatafatchingService {
  private _url: string = "/assets/data/dataSource.json";
  constructor(private http: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url);
  }
}
