import { TestBed, inject } from '@angular/core/testing';

import { SkillsListService } from './skills-list.service';

describe('SkillsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsListService]
    });
  });

  it('should be created', inject([SkillsListService], (service: SkillsListService) => {
    expect(service).toBeTruthy();
  }));
});
