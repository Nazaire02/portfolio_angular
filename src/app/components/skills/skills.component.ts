import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
        { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }
      ]
    },
    {
      category: 'Frameworks frontend',
      items: [
        { name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
        { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }
      ]
    },
    {
      category: 'Frameworks Backend',
      items: [
        { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' }
      ]
    },
    {
      category: 'Databases & Tools',
      items: [
        { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
        { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
        { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
        { name: 'GitLab', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg' },
        { name: 'Bitbucket', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg' }
      ]
    },
    {
      category: 'Project Management',
      items: [
        { name: 'Trello', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Trello-logo-blue.svg' },
        { name: 'Jira', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.png' }
      ]
    }
  ];
}
