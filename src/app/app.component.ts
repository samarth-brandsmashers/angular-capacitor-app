import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BottomSheetService } from './services/bottom-sheet.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-capacitor-app';

  constructor(private router: Router, private bottomSheetService: BottomSheetService) {}

  goToRoute(route: string): void {
    this.router.navigate([route]);
  }

  openBottomSheet(): void {
    const data = {
      title: 'Custom Title',
      content: '<p>This is custom content passed to the bottom sheet!</p>'
    };
    this.bottomSheetService.openBottomSheet(data);
  }
}
