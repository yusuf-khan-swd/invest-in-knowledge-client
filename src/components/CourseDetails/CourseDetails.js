import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  // destructure the object from loader 
  const { courseId, courseName, img, description, details, price } = useLoaderData();

  // Create ref for pdf-to-react package
  const ref = React.createRef();

  return (
    <div ref={ref} className="border-4 my-10 rounded px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-20">
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto text-center">
        <div>
          <Link to="/courses">
            <button className="border-2 border-gray-600 py-1 px-2 rounded mb-3 hover:bg-gray-300">
              Go Back
            </button>
          </Link>
          <h2 className="mb-8 mt-3 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {courseName}
          </h2>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>
              <FaDownload className="text-2xl text-gray-500 mb-5"></FaDownload>
            </button>}
          </Pdf>
        </div>
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <img
            className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
            src={img}
            alt=""
          />
          <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 hover:bg-opacity-25"></span>
        </div>
        <h2 className="text-3xl font-bold mb-3">Price: <span className="text-orange-400">${price}</span></h2>
        <div className="text-left">
          <p className="mb-5 text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className="cursor-pointer mt-3 mb-5">
            {details.map((detail, index) => (
              <li
                key={index}
                className="hover:dark:text-violet-500 list-decimal mb-1"
              >
                {detail}
              </li>
            ))}
          </div>
        </div>
        <div>
          <Link to={`/checkout/${courseId}`}>
            <button className="inline-flex border w-full items-center justify-center py-2 px-4 font-medium transition-colors duration-200 rounded-lg bg-amber-400 hover:bg-amber-600">
              Get premium access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
