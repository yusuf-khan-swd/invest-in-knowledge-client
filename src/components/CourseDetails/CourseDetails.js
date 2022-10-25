import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const details = useLoaderData();
  const { courseName, courseId } = details;

  return (
    <div>
      <h2>Course Details of : {courseName}</h2>
      <Link to={`/courses/${courseId}`}>
        <button>Get premium access</button>
      </Link>
    </div>
  );
};

export default CourseDetails;