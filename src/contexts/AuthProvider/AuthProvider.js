import React from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { displayName: 'Yusuf Khan' };

  const singInWithProvider = provider => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = { user, singInWithProvider };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;