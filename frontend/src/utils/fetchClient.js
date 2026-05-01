const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

import { Storage } from './storage';

export async function fetchClient(endpoint, options = {}) {
  const token = Storage.getLocal('TOKEN') || Storage.getSession('TOKEN');
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (response.status === 401) {
      Storage.clearAll();
      // Only redirect if we're not already on the login page to avoid infinite loops and hidden errors
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Unauthorized - Please log in again');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

    if (response.status === 204) return null;
    
    return await response.json();
  } catch (error) {
    console.error(`[API Error] ${endpoint}:`, error.message);
    throw error;
  }
}
