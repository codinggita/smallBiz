import { fetchClient } from '../utils/fetchClient';

export const authService = {
  login: async (email, password) => {
    // REAL IMPLEMENTATION (Commented out until backend is ready):
    // return fetchClient('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password })
    // });

    // MOCK IMPLEMENTATION (To keep the UI working perfectly fine):
    console.log('[Mock API] Calling POST /api/auth/login');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            token: 'mock-jwt-token-12345',
            user: { id: 'u_1', name: 'Demo User', email }
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 800); // Simulate network delay
    });
  },

  register: async (userData) => {
    console.log('[Mock API] Calling POST /api/auth/register', userData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: 'User registered successfully',
          token: 'mock-jwt-token-67890',
          user: { id: 'u_2', ...userData }
        });
      }, 1000);
    });
  }
};
