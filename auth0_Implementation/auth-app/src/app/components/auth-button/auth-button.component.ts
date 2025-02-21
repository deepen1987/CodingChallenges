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

  ngOnInit() {}

  async googleLogin() {
    await this.auth.googleLogin();
  }
  logout() {
    this.auth.logout();
  }
}
