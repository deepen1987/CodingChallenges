import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
})
export class AuthButtonComponent implements OnInit {
  // Inject the authentication service into your component through the constructor
  public auth = inject(AuthServiceService);
  public document = inject(DOCUMENT);
  public isAuthenticated: boolean = false;

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.isAuthenticated = !!user;
        console.log(user.name);
      }
    });
  }

  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
