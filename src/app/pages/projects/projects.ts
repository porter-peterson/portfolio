import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  faGithub = faGithub;
}
