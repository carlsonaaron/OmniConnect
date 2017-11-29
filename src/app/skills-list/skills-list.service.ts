import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

import { Skill, SKILLS_LIST } from './skill';

@Injectable()
export class SkillsListService {

  private skillsSubject: BehaviorSubject<Skill[]> = new BehaviorSubject([]);

  constructor() { }

  GetSkills(): Observable<Skill[]> {
    this.skillsSubject.next(SKILLS_LIST);
    return this.skillsSubject.asObservable();
  }
}


