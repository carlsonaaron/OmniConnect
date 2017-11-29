export class Skill {
    SkillId: number;
    Name: string;
    Description: string;

    constructor(skillId: number, name: string, description: string) {
        this.SkillId = skillId;
        this.Name = name;
        this.Description = description;
    }
}



// ==== MOCK Data ====
export let SKILLS_LIST: Array<Skill> = [
    { SkillId: 1, Name: 'C#', Description: 'C#'},
    { SkillId: 2, Name: 'C++', Description: 'C++'},
    { SkillId: 3, Name: 'C', Description: 'C'},
    { SkillId: 4, Name: 'Java', Description: 'Java'},
    { SkillId: 5, Name: 'JavaScript', Description: 'JavaScript'},
    { SkillId: 6, Name: 'HTML', Description: 'HTML'},
    { SkillId: 7, Name: 'CSS', Description: 'CSS'},
    { SkillId: 8, Name: 'JQuery', Description: 'JQuery'},
    { SkillId: 9, Name: 'MVC', Description: 'MVC'},
    { SkillId: 10, Name: '.NET Core', Description: '.NET Core'},
    { SkillId: 11, Name: 'Web Forms', Description: 'Web Forms'},
    { SkillId: 12, Name: 'AngularJS', Description: 'AngularJS'},
    { SkillId: 13, Name: 'Angular 2+', Description: 'Angular 2+'},
    { SkillId: 14, Name: 'Aurelia', Description: 'Aurelia'},
    { SkillId: 15, Name: 'ReactJS', Description: 'ReactJS'},
    { SkillId: 16, Name: 'T-SQL', Description: 'T-SQL'},
    { SkillId: 17, Name: 'SQL Server', Description: 'SQL Server'},
    { SkillId: 18, Name: 'OpenSQL', Description: 'OpenSQL'},
    { SkillId: 19, Name: 'MySQL', Description: 'MySQL'},
    { SkillId: 20, Name: 'WCF Services', Description: 'WCF Services'}
  ];
