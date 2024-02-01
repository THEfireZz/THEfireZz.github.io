import { Routes } from '@angular/router';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormationComponent } from './components/pages/formation/formation.component';



export const routes: Routes = [
    { path: 'skills', component: SkillsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'formation', component: FormationComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];
