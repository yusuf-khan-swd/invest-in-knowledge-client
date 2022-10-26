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

  const { singInWithProvider, logIn, setLoading } = useContext(AuthContext);

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
      .finally(() => {
        setLoading(false);
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
    <div className='bg-gray-600'>
      <div className="container mx-auto">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Please Login
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      First name
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Last name
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
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
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition-colors duration-20 rounded shadow-md bg-zinc-400 hover:bg-zinc-500"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Already have an account? <Link to='/login' className="text-cyan-500 underline pl-1 pr-2">login</Link>
                  </p>
                </form>
              </div>
              <div>
                <button>Google Login</button>
              </div>
              <div>
                <button>Github Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;