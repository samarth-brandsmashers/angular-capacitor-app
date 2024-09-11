import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-capacitor-app';

  constructor(private router: Router) {}

  goToRoute(route: string): void {
    this.router.navigate([route]);
  }

}
