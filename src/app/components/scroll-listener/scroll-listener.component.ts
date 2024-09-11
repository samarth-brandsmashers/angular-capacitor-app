import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-scroll-listener',
  standalone: true,
  imports: [],
  templateUrl: './scroll-listener.component.html',
  styleUrls: ['./scroll-listener.component.css']
})
export class ScrollListenerComponent {

  private isScrollEnabled: boolean;

  constructor() {
    this.isScrollEnabled = true;
  }

  openDialog() {
    alert("You've not appeared yet in today's quiz.")
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if(!this.isScrollEnabled){
      this.openDialog();
    }
  }

  onCheck(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isScrollEnabled = isChecked;
  }
}
