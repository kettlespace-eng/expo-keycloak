export const KC_INITIAL_VALUE = {
  ready: false,
  isLoggedIn: false,
  login: () => console.error('KC Not Initialized.'),
  logout: () => console.error('Not Logged In.'),
  tokens: null,
} as any
export const NATIVE_REDIRECT_PATH = 'auth/redirect'
export const TOKEN_STORAGE_KEY = '$KEYCLOAK_AUTH_TOKEN$'
export const REFRESH_TIME_BUFFER = 10
