import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: environment.firebaseConfig.projectId,
        appId: environment.firebaseConfig.appId,
        storageBucket: environment.firebaseConfig.storageBucket,
        apiKey: environment.firebaseConfig.apiKey,
        authDomain: environment.firebaseConfig.authDomain,
        messagingSenderId: environment.firebaseConfig.messagingSenderId,
        measurementId: environment.firebaseConfig.measurementId,
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
