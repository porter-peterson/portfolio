import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { AboutMe } from './pages/about-me/about-me';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, AboutMe, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
