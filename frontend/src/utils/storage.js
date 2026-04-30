const KEYS = {
  TOKEN: 'crm_auth_token',
  USER_PREFS: 'crm_user_prefs',
  DRAFT_INVOICE: 'crm_draft_invoice',
  SETTINGS_TAB: 'settings_active_tab'
};

export const Storage = {
  // --- Local Storage ---
  getLocal: (key) => {
    try {
      const item = window.localStorage.getItem(KEYS[key] || key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return null;
    }
  },
  
  setLocal: (key, value) => {
    try {
      window.localStorage.setItem(KEYS[key] || key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  },

  removeLocal: (key) => {
    window.localStorage.removeItem(KEYS[key] || key);
  },

  // --- Session Storage ---
  getSession: (key) => {
    try {
      const item = window.sessionStorage.getItem(KEYS[key] || key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  },

  setSession: (key, value) => {
    window.sessionStorage.setItem(KEYS[key] || key, JSON.stringify(value));
  },

  removeSession: (key) => {
    window.sessionStorage.removeItem(KEYS[key] || key);
  },
  
  // Clear everything on Logout
  clearAll: () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
};
