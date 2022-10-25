import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');

  const { singInWithProvider } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    singInWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Google login successful');
        setError('');
      })
      .catch((error) => {
        console.error('error: ', error);
        setError(error.message);
      })

  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleGoogleLogIn}>Google Sign In</button>
      {error}
    </div>
  );
};

export default Login;