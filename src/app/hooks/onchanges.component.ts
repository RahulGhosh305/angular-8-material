import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-onchanges",
  template: `Child OnChanges Html Page: {{ userText }} `,
})
export class OnChangesComponent implements OnChanges {
  @Input("userTextFromApp") public userText;

  ngOnChanges(changes: SimpleChanges): void {
    for (let name in changes) {
      let change = changes[name];

      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
    }
  }
}
