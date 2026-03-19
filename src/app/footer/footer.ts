import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
