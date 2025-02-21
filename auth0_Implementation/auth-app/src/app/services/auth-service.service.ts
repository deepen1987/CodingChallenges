import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
} from '@angular/fire/auth';

import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  auth = inject(Auth);
  currentUser = signal<any>(null);

  // 🔹 Google Login
  async googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).then(() => {
      this.setCurrentUser();
    });
  }

  // 🔹 Email/Password Login
  async emailLogin(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
      this.setCurrentUser();
    });
  }

  // 🔹 Register with Email/Password
  async signUp(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(() => {
      this.setCurrentUser();
    });
  }

  // 🔹 Logout
  async logout() {
    signOut(this.auth).then(() => {
      this.setCurrentUser();
    });
  }

  setCurrentUser() {
    // 🔹 Get current user
    this.currentUser.set(this.auth.currentUser);
    console.log(this.currentUser());
  }
}
