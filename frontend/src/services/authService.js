import { fetchClient } from '../utils/fetchClient';

export const authService = {
  // POST /api/auth/login
  login: async (email, password) => {
    return fetchClient('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // POST /api/auth/register
  register: async (userData) => {
    return fetchClient('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // POST /api/auth/logout
  logout: async () => {
    return fetchClient('/auth/logout', { method: 'POST' });
  },

  // GET /api/auth/me
  getMe: async () => {
    return fetchClient('/auth/me');
  },

  // POST /api/auth/onboarding
  completeOnboarding: async (data) => {
    return fetchClient('/auth/onboarding', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
