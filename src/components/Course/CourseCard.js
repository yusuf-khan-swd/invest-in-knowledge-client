import React from 'react';

const CourseCard = ({ course }) => {
  const { courseName, img } = course;
  return (
    <div>
      <h3>{courseName}</h3>
      <img style={{ "width": "250px" }} src={img} alt="" />
    </div>
  );
};

export default CourseCard;