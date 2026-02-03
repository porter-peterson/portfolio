import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about-me',
  imports: [ MatCardModule, MatIconModule, RouterLink, RouterLinkActive, MatButtonModule ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {

}
