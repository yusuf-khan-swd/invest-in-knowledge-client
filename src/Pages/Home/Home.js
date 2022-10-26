import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-gray-900 pb-12">
      <div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Welcome To Invest In Knowledge
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
            Many programmers think that data structures and algorithms (DSAs)
            are just something you have to “get through” in school, but will
            never need in real life. However, they’re surprised when so many
            interviews include DSA questions. There are several reasons
            companies are interested in a prospective employee’s DSA knowledge,
            and why programmers should be interested in it too.
          </p>
          <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
            For many companies, such as Meta, Google, Microsoft, and Amazon,
            writing code is just the final step in a long process. The majority
            of a programmer’s time is actually spent considering the best way to
            approach a project, including the best data structures and optimal
            algorithms to employ.
          </p>
          <div className="mb-5 text-center">
            <div className="mb-5">
              <Link to='/courses'>
                <button
                  className='inline-flex border uppercase m-2 items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600'
                >
                  Go To Courses
                </button>
              </Link>
            </div>
            <Link to='/login'>
              <button
                className='inline-flex border uppercase m-2 items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600'
              >
                Login
              </button>
            </Link>
            <Link to='/register'>
              <button
                className='inline-flex border uppercase m-2 items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600'
              >
                Register
              </button>
            </Link>
          </div>
          <Link
            to="/courses"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
