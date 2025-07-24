// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 🔧 Replace this with real logic later (e.g., from your backend or Firebase)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume user is logged in
  const [hasSubscription, setHasSubscription] = useState(true); // Assume user paid

  return (
    <AuthContext.Provider value={{ isLoggedIn, hasSubscription, setIsLoggedIn, setHasSubscription }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
// src/context/AuthContext.js