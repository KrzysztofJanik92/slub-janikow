import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../modules/core/services/auth.service";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  isShown = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isShown = !this.isShown;
  }

  logout() {
    this.authService.logout();
  }
}
