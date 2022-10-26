import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { courseId, courseName, description, img } = course;
  return (
    <Link to={`/courses/${courseId}`}>
      <div>
        <h3>{courseName}</h3>
        <img style={{ "width": "250px" }} src={img} alt="" />
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;