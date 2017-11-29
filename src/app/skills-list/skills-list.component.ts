import { Observable } from 'rxjs/Observable';
import { SkillsListService } from './skills-list.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  selectedSkill: Skill;
  $skills: Observable<Skill[]>;

  constructor(private skillsListService: SkillsListService) { }

  ngOnInit() {
    this.$skills = this.skillsListService.GetSkills();
  }

  onClick(skill: Skill) {
    this.selectedSkill = skill;
  }

}
