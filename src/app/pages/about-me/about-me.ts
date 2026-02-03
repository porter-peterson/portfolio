import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [ MatCardModule, MatIconModule, RouterLink, MatButtonModule ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  standalone: true
})
export class AboutMe {

}
