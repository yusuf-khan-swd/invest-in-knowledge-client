import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [errors, setErrors] = useState({
    googleError: '',
    githubError: '',
    registerError: '',
  });

  const { singInWithProvider, createUser, updateUserProfile } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(name, photoURL, email, password, confirm);

    if (password !== confirm) {
      return toast.error(`Password did not matched!!`);
    }

    createUser(email, password)
      .then((result => {
        const user = result.user;
        console.log(user);
        toast.success('Registration is Successful!!');
        form.reset();
        const newError = { ...errors };
        newError.registerError = '';
        setErrors(newError);
        handleUpdateUserProfile(name, photoURL);
      }))
      .catch((error) => {
        console.error('error', error);
        const newError = { ...errors };
        newError.registerError = error.message;
        setErrors(newError);
        form.reset();
      })
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    };

    updateUserProfile(profile)
      .then(() => { })
      .catch((error) => {
        console.error('error: ', error);
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
      <h2>Register Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Full Name: </label>
          <input type="text" name='name' id='name' />
        </div>
        <div>
          <label htmlFor="photo">photoURL: </label>
          <input type="text" name='photo' id='photo' />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' id='email' />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name='password' id='password' />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password: </label>
          <input type="password" name='confirm' id='confirm' />
        </div>
        <div>
          {errors.registerError}
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button type='button'>Button</button>
        </div>
      </form>
      <button onClick={handleGoogleLogIn}>Google Sign In</button>
      {errors.googleError}
      <button onClick={handleGithubLogIn}>Github Sign In</button>
      {errors.githubError}
    </div>
  );
};

export default Register;