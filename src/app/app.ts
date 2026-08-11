import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileCard } from "./components/profile-card/profile-card";
import { Students } from "./components/students/students";
import { AnnouncementCard } from "./components/announcement-card/announcement-card";


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [Header, Footer, ProfileCard, AnnouncementCard , Students],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Niel Jhon E. Celocia');
}