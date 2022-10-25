import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const details = useLoaderData();
  const { courseName, img, description } = details;

  return (
    <div>
      <h2>Course Details of : {courseName}</h2>
    </div>
  );
};

export default CourseDetails;