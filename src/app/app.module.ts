import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DigitcountPipe } from "./digitcount.pipe";
import { ExpenseEntryListComponent } from "./expense-entry-list/expense-entry-list.component";
import { ExpenseEntryComponent } from "./expense-entry/expense-entry.component";
import { StudentComponent } from "./student/student.component";
import { TestComponent } from "./test/test.component";
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestComponent,
    StudentComponent,
    ExpenseEntryListComponent,
    DigitcountPipe,
    ChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
