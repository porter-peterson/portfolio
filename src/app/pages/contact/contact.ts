import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [ 
    FontAwesomeModule,
    MatButtonModule, 
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true
})
export class Contact {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
