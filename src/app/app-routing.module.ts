import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MainComponent } from './components/main/main.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationsComponent } from './components/educations/educations.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children:[
      {path:'', component:AccueilComponent},
      {path:'skills', component:SkillsComponent},
      {path:'projects', component:ProjectsComponent},
      {path:'experiences', component:ExperiencesComponent},
      {path:'educations', component:EducationsComponent},
      {path:'resume', component:ResumeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
