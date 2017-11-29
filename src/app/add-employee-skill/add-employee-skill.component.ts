import { Skill } from './../skills-list/skill';
import { Employee } from './../employees-list/employee';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-employee-skill',
  templateUrl: './add-employee-skill.component.html',
  styleUrls: ['./add-employee-skill.component.css']
})
export class AddEmployeeSkillComponent implements OnInit {
  @Input()
  employee: Employee;

  @Input()
  skill: Skill;

  proficiency: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSaveClicked() {
    alert('saved');
  }

}
