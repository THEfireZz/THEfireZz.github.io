import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';



export const routes: Routes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: '**', redirectTo: '' }
];
