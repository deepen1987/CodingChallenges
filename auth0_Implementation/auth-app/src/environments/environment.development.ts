export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  firebaseConfig: {
    projectId: 'auth-app-77ca2',
    appId: '1:771983448025:web:64b2e78189eb5e8ec1ebc8',
    storageBucket: 'auth-app-77ca2.firebasestorage.app',
    apiKey: '',
    authDomain: 'auth-app-77ca2.firebaseapp.com',
    messagingSenderId: '771983448025',
    measurementId: 'G-2DN6DG43YW',
  },
  auth0: {
    domain: 'dev-zhnbmbd7sxchd2hg.us.auth0.com',
    clientId: 'wvzlYQZ22c9TWMPialmzhPrkGjFUgPjn',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
};
