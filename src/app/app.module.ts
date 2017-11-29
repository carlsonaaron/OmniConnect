import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

import { EmployeeService } from './employees-list/employee.service';
import { SkillsListService } from './skills-list/skills-list.service';
import { AddEmployeeSkillComponent } from './add-employee-skill/add-employee-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsListComponent,
    EmployeesListComponent,
    AddEmployeeSkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SkillsListService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
