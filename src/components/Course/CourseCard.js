import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { courseName, img, courseId } = course;
  return (
    <Link to={`/courses/${courseId}`}>
      <div>
        <h3>{courseName}</h3>
        <img style={{ "width": "250px" }} src={img} alt="" />
      </div>

    </Link>
  );
};

export default CourseCard;