import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownOpenProducts = false;
  isDropdownOpenResources = false;

  openDropdownResources() {
    this.isDropdownOpenResources = true;
  }

  closeDropdownResources() {
    this.isDropdownOpenResources = false;
  }

  openDropdownProducts() {
    this.isDropdownOpenProducts = true;
  }

  closeDropdownProducts() {
    this.isDropdownOpenProducts = false;
  }
}
