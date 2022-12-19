import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';

const CourseCard = ({ course }) => {
  const { darkTheme } = useContext(ThemeContext);

  const { courseId, courseName, description, img } = course;
  return (
    <div className='mb-8 m-2'>
      <Link className='cursor-default' to={`/courses/${courseId}`}>
        <div className="border border-slate-400 rounded px-4 sm:py-16 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-20">
          <div className="relative mb-6 md:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
            <img
              className="object-cover w-full h-56 rounded-3xl shadow-lg md:h-64 lg:h-80"
              src={img}
              alt=""
            />
            <span
              className="absolute rounded-3xl inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 hover:bg-opacity-25"
            >
            </span>
          </div>
          <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto text-center">
            <h2 className={`mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none ${darkTheme ? 'text-gray-300' : ''}`}>
              {courseName}
            </h2>
            <p className={`mb-5 text-base md:text-lg ${darkTheme ? 'text-gray-300' : ''}`}>
              {description}
            </p>
            <div>
              <button
                className='inline-flex border w-full items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600'
              >
                Get Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;