import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutMe } from './pages/about-me/about-me';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about-me', component: AboutMe},
  { path: 'contact', component: Contact},
  { path: 'home', component: Home},
  { path: 'projects', component: Projects},
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // Wildcard route for a 404 page @TODO: Add 404 page.
];
