import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Practice');
  name="Azim"
  email="azim.shaheb@gmail.com"
  getName(a:number,b:number){
    return a+b
  }
}
