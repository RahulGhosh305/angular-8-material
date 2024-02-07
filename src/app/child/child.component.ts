import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  @Output() childDataEvent = new EventEmitter();

  @Input("passData") public childName;
  @Input() public anotherData;

  constructor() {}

  ngOnInit() {
    const dataToSend = "Data from child component";
    this.childDataEvent.emit(dataToSend);
  }
}
