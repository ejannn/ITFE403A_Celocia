import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Products } from "./components/products/products";


@Component({
  selector: 'app-root',
  imports: [Header, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test_1');
}
