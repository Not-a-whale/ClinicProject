import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinicProject';
  isOpen = false;

  handleToggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
