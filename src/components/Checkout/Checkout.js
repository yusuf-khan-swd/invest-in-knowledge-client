import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';

const Checkout = () => {
  const { courseId, courseName, img, description, details } = useLoaderData();
  const { user } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (user.displayName) {
      toast.success(`Congratulation on your purchase ${user.displayName}`)
    }
  }, [user])

  return (
    <div className={`py-10 ${darkTheme ? 'bg-gray-400 text-gray-200' : 'bg-white'}`}>
      <div div className="border-4 rounded px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-20" >
        <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto text-center">
          <div>
            <Link to={`/courses/${courseId}`}>
              <button className="border-2 border-gray-600 py-1 px-2 rounded mb-3 hover:bg-gray-300">
                Go Back
              </button>
            </Link>
            <h2 className="mb-8 mt-3 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {courseName}
            </h2>
          </div>
          <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
            <img
              className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
              src={img}
              alt=""
            />
            <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 hover:bg-opacity-25"></span>
          </div>
          <p className="mb-5 text-left text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className="text-left cursor-pointer mt-3 mb-5">
            {details.map((detail, index) => (
              <li
                key={index}
                className="hover:dark:text-violet-500 list-decimal mb-1"
              >
                {detail}
              </li>
            ))}
          </div>
          <div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Checkout;