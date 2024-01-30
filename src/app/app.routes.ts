import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormationComponent } from './components/pages/formation/formation.component';



export const routes: Routes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'formation', component: FormationComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];
