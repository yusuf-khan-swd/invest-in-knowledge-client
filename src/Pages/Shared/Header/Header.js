import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/logo/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logout is successful');
      })
      .catch(error => {
        console.error('error: ', error)
        toast.error('Logout is not successful');
      })
  };

  const handleDarkTheme = event => {
    const isChecked = event.target.checked;

    if (isChecked) {
      toast.success('YAY!! Dark Theme On.')
    }
  };

  return (
    <nav>
      <div className="bg-gray-600 text-gray-400">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo} className="object-cover cursor-pointer w-16 h-16 rounded-full shadow dark:bg-gray-500" alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                Invest In Knowledge
              </span>
            </a>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/home"
                  aria-label="Our home"
                  title="Our home"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Our courses"
                  title="Our courses"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  aria-label="faq"
                  title="Frequently asked question"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="blog"
                  title="Blog"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-400">
                  <span>Light</span>
                  <span className="relative">
                    <input id="Toggle1" onClick={handleDarkTheme} type="checkbox" className="hidden peer" />
                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                  </span>
                  <span>Dark</span>
                </label>
              </li>
              {
                user?.uid ?
                  <>
                    <li>
                      {
                        user?.photoURL ?
                          <img alt="" src={user?.photoURL} title={user?.displayName} className="object-cover cursor-pointer w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                          :
                          <FaUserAlt title={user?.displayName} className='text-xl cursor-pointer'></FaUserAlt>
                      }
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="inline-flex items-center justify-center h-9 py px-4 outline font-medium transition-colors duration-200 rounded hover:text-gray-300"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Log Out
                      </button>
                    </li>
                  </>
                  :
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="inline-flex items-center justify-center h-9 py px-4 outline font-medium transition-colors duration-200 rounded hover:text-gray-300"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="inline-flex items-center justify-center h-9 py px-4 outline font-medium transition-colors duration-200 rounded hover:text-gray-300"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
              }
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <svg
                            className="w-8 text-deep-white"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="/home"
                            aria-label="Our home"
                            title="Our home"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/courses"
                            aria-label="Our courses"
                            title="Our courses"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                          >
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/faq"
                            aria-label="faq"
                            title="Frequently asked question"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog"
                            aria-label="blog"
                            title="Blog"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-white"
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-400">
                            <span>Light</span>
                            <span className="relative">
                              <input id="Toggle1" type="checkbox" className="hidden peer" />
                              <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                            <span>Dark</span>
                          </label>
                        </li>
                        {
                          user?.uid ?
                            <>
                              <li>
                                {
                                  user?.photoURL ?
                                    <img alt="" src={user?.photoURL} title={user?.displayName} className="object-cover cursor-pointer w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                    :
                                    <FaUserAlt title={user?.displayName} className='text-xl cursor-pointer'></FaUserAlt>
                                }
                              </li>
                              <li>
                                <button
                                  onClick={handleLogOut}
                                  className="inline-flex items-center justify-center h-9 py px-4 outline font-medium transition-colors duration-200 rounded hover:text-gray-300"
                                  aria-label="Sign up"
                                  title="Sign up"
                                >
                                  Log Out
                                </button>
                              </li>
                            </>
                            :
                            <>
                              <li>
                                <Link
                                  to="/login"
                                  className="inline-flex items-center justify-center h-9 py px-4 outline font-medium transition-colors duration-200 rounded hover:text-gray-300"
                                  aria-label="Sign up"
                                  title="Sign up"
                                >
                                  Login
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/register"
                                  className="inline-flex items-center justify-center h-9 py px-4 outline font-medium transition-colors duration-200 rounded hover:text-gray-300"
                                  aria-label="Sign up"
                                  title="Sign up"
                                >
                                  Sign Up
                                </Link>
                              </li>
                            </>
                        }
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;