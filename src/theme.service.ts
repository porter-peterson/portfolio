 import { Injectable, inject, signal, effect, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _document = inject(DOCUMENT);
  private _platformId = inject(PLATFORM_ID);
  
  readonly isDarkTheme = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this._platformId)) {
      this._initializeTheme();

      effect(() => {
        if (this.isDarkTheme()) {
          this._document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          this._document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  private _initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.isDarkTheme.set(true);
    }
  }

  toggleTheme() {
    this.isDarkTheme.update(isDark => !isDark);
  }
}
