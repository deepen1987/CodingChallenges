export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  auth0: {
    domain: 'dev-zhnbmbd7sxchd2hg.us.auth0.com',
    clientId: 'wvzlYQZ22c9TWMPialmzhPrkGjFUgPjn',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
};
