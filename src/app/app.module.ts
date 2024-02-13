import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { DigitcountPipe } from "./digitcount.pipe";

import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { ChildOfFirstComponentComponent } from "./child-of-first-component/child-of-first-component.component";
import { ChildComponent } from "./child/child.component";
import { DebugComponent } from "./debug/debug.component";
import { ExpenseEntryListComponent } from "./expense-entry-list/expense-entry-list.component";
import { ExpenseEntryComponent } from "./expense-entry/expense-entry.component";
import { FirstParentComponent } from "./first-parent/first-parent.component";
import { HomeComponent } from "./home/home.component";
import { OnChangesComponent } from "./hooks/onchanges.component";
import { NopagetodisplayComponent } from "./nopagetodisplay/nopagetodisplay.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentComponent } from "./student/student.component";
import { TestComponent } from "./test/test.component";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestComponent,
    StudentComponent,
    ExpenseEntryListComponent,
    ChildComponent,
    OnChangesComponent,
    StudentListComponent,
    FirstParentComponent,
    ChildOfFirstComponentComponent,
    DebugComponent,
    HomeComponent,
    NopagetodisplayComponent,
    AboutComponent,
    DigitcountPipe,
    FormComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
