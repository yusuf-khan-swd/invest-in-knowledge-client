import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const [errors, setErrors] = useState({
    googleError: '',
    githubError: '',
    loginError: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { singInWithProvider, logIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Login successful!!');
        form.reset();
        const newError = { ...errors };
        newError.loginError = '';
        setErrors(newError);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error('error: ', error);
        const newError = { ...errors };
        newError.loginError = error.message;
        setErrors(newError);
      })
  };

  const handleGoogleLogIn = () => {
    singInWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Google login successful');
        const newError = { ...errors };
        newError.googleError = '';
        setErrors(newError);
        navigate(from, { replace: true });
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
        navigate(from, { replace: true });
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
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' id='email' />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name='password' id='password' />
        </div>
        <div>
          {errors.loginError}
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button type='button'>Button</button>
        </div>
      </form>
      <div>
        Don't have an account? <Link to='/register'>Create an account</Link>
      </div>
      <button onClick={handleGoogleLogIn}>Google Sign In</button>
      {errors.googleError}
      <button onClick={handleGithubLogIn}>Github Sign In</button>
      {errors.githubError}
    </div>
  );
};

export default Login;