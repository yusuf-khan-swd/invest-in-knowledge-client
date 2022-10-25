import React from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const singInWithProvider = provider => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return () => unSubscribe();
  }, []);

  const authInfo = { user, singInWithProvider, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;