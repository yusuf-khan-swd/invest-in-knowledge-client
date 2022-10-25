import React from 'react';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { displayName: 'Yusuf Khan' };

  const authInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;