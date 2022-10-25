import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const [errors, setErrors] = useState({
    googleError: '',
    githubError: ''
  });

  const { singInWithProvider } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogIn = () => {
    singInWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Google login successful');
        const newError = { ...errors };
        newError.googleError = '';
        setErrors(newError);
      })
      .catch((error) => {
        console.error('error: ', error);
        const newError = { ...errors };
        newError.googleError = error.message;
        setErrors(newError);
      })
  };

  const handleGithubLogIn = () => {
    singInWithProvider(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Github login successful');
        const newError = { ...errors };
        newError.githubError = '';
        setErrors(newError);
      })
      .catch((error) => {
        console.error('error: ', error);
        const newError = { ...errors };
        newError.githubError = error.message;
        setErrors(newError);
      })

  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleGoogleLogIn}>Google Sign In</button>
      {errors.googleError}
      <button onClick={handleGithubLogIn}>Github Sign In</button>
      {errors.githubError}
    </div>
  );
};

export default Login;