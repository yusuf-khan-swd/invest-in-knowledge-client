import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import googleLogo from '../../../assets/images/google.png';
import githubLogo from '../../../assets/images/github.png';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';

const Register = () => {
  const { darkTheme } = useContext(ThemeContext);

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
    <div className={`${darkTheme ? 'bg-gray-700 text-gray-300' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
              <div className="bg-gray-100 rounded p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Please Register
                </h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      placeholder="John Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-2 focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="photoURL"
                      className="inline-block mb-1 font-medium"
                    >
                      Photo URL
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-2 focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="photoURL"
                      name="photo"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-2 focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="password"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-2 focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="confirm"
                      className="inline-block mb-1 font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      placeholder="confirm password"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-2 focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="confirm"
                      name="confirm"
                    />
                  </div>
                  <div className='text-red-500'>
                    {errors.registerError}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition-colors duration-20 rounded shadow-md bg-zinc-400 hover:bg-zinc-500"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Already an account? <Link to='/login' className="text-cyan-500 underline pl-1 pr-2">Please Login</Link>
                  </p>
                </form>
              </div>
              <div className='mt-8'>
                <div className='mb-5'>
                  <button
                    onClick={handleGoogleLogIn}
                    className='inline-flex border w-full items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg text-gray-300 hover:bg-gray-700'
                  >
                    <img src={googleLogo} className="w-9 mr-2" alt="" />
                    Google Sign Up
                  </button>
                  <div className='text-orange-500 mt-2 text-center'>
                    {errors.googleError}
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleGithubLogIn}
                    className='inline-flex border w-full items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg text-gray-300 hover:bg-gray-700'
                  >
                    <img src={githubLogo} className="w-9 mr-2" alt="" />
                    Github Sign Up
                  </button>
                  <div className='text-orange-500 mt-2 text-center'>
                    {errors.githubError}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;