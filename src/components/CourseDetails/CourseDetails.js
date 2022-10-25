import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const { courseName, courseId } = useLoaderData();

  return (
    <div>
      <h2>Course Details of : {courseName}</h2>
      <Link to={`/checkout/${courseId}`}>
        <button>Get premium access</button>
      </Link>
    </div>
  );
};

export default CourseDetails;