import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://b610-lerning-platform-server-side-yusuf-khan-swd.vercel.app/courses')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
  }, [])

  return (
    <div className={`${darkTheme ? 'bg-gray-700 text-gray-200' : 'bg-white'}`}>
      <div className="p-2">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className={`mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none ${darkTheme ? 'text-gray-300' : 'text-gray-800'}`}>
              Welcome To Invest In Knowledge
            </h2>
            <p className={`mb-6 text-base font-thin tracking-wide md:text-lg ${darkTheme ? 'text-gray-300' : 'text-gray-800'}`}>
              Many programmers think that data structures and algorithms (DSAs)
              are just something you have to “get through” in school, but will
              never need in real life. However, they’re surprised when so many
              interviews include DSA questions. There are several reasons
              companies are interested in a prospective employee’s DSA knowledge,
              and why programmers should be interested in it too.
            </p>
            <p className={`mb-8 max-w-md text-xs font-thin tracking-wide sm:text-sm sm:mx-auto ${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>
              For many companies, such as Meta, Google, Microsoft, and Amazon,
              writing code is just the final step in a long process. The majority
              of a programmer’s time is actually spent considering the best way to
              approach a project, including the best data structures and optimal
              algorithms to employ.
            </p>
            <div className="text-center">
              <div>
                <Link to='/courses'>
                  <button
                    className='inline-flex border uppercase items-center justify-center py-1 px-4 font-medium transition-colors duration-200 rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600'
                  >
                    Go To Our Courses
                  </button>
                </Link>
              </div>
              <div>
                <Link to='/login'>
                  <button
                    className='inline-flex border text-xs uppercase m-2 items-center justify-center py-1 w-28 font-medium transition-colors duration-200 rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600'
                  >
                    Login
                  </button>
                </Link>
                <Link to='/register'>
                  <button
                    className='inline-flex border text-xs uppercase m-2 items-center justify-center py-1 w-28 font-medium transition-colors duration-200 rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600'
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center font-bold text-3xl mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mb-16">
          {
            categories.map(category => <p key={category.id}>
              <Link className={`rounded capitalize flex justify-center items-center w-full h-full font-semibold p-2 overflow-hidden truncate ${darkTheme ? 'text-gray-100 bg-gray-500' : 'text-blue-900 bg-gray-200'}`} to={`/courses/${category.courseId}`}>{category.courseName}</Link>
            </p>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
