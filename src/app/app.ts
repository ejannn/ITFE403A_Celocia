import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    RouterOutlet,
    RouterLink,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Niel Jhon E. Celocia');
}