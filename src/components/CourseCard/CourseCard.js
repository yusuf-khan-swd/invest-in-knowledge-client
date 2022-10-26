import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { courseId, courseName, description, img } = course;
  return (
    <Link to={`/courses/${courseId}`}>
      <div className="border px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <img
            className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
            src={img}
            alt=""
          />
          <span
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 hover:bg-opacity-25"
          >
          </span>
        </div>
        <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {courseName}
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className="flex items-center md:justify-center">
            <span
            >
              Get started
            </span>
            <span
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;