import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Expense Manager";
  userText: string = "";

  public parentdata: string = "Pass Parent Data to Child Data";
  public anotherDataPass: string = "Hello Child I am your Parent Data";

  // Get Data form Child Component
  childData: string = "";
  handleChildData(dataFromChild: any) {
    this.childData = dataFromChild;
  }
}
