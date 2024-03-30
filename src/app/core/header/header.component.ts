import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clicked = false;
  constructor() { }

  ngOnInit() {
  }

  menu(): void {
    if (!this.clicked) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

  closeMenu() {
    this.clicked = false;
  }
}
