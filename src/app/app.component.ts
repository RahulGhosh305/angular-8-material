import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Expense Manager";

  public parentdata = "Pass Parent Data to Child Data";
  public anotherDataPass = "Hello Child I am your Parent Data";
  childData = "";
  handleChildData(dataFromChild: any) {
    this.childData = dataFromChild;
  }
}
