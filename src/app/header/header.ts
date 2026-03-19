import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, FontAwesomeModule],
  standalone: true,
  providers: [ThemeService],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  themeService = inject(ThemeService);
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
