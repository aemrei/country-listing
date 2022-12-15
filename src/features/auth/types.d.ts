interface AuthState {
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  error?: string;
}
