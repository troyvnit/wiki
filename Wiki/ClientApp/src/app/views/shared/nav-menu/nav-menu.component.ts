import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isFirstBarExpanded = false;
  isSecondBarExpanded = false;

  collapseFirstBar() {
    this.isFirstBarExpanded = false;
  }

  toggleFirstBar() {
    this.isFirstBarExpanded = !this.isFirstBarExpanded;
  }

  collapseSecondBar() {
    this.isSecondBarExpanded = false;
  }

  toggleSecondBar() {
    this.isSecondBarExpanded = !this.isSecondBarExpanded;
  }
}
