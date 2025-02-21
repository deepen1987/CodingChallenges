import { inject, Injectable, signal } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../_models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public auth: AuthService = inject(AuthService);
  currentUser = signal<any>(null);

  // Get authentication state
  isAuthenticated$ = this.auth.isAuthenticated$;

  // Get user profile
  user$ = this.auth.user$;

  constructor() {
    this.auth.user$.pipe(tap((user) => this.currentUser.set(user))).subscribe();
  }
  // Login
  login() {
    this.auth.loginWithRedirect();
  }

  // Logout
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }
}
