import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/Course/CourseCard';

const Courses = () => {
  const courseCategory = useLoaderData();
  return (
    <div>
      <h2>This is Courses Component {courseCategory.length} </h2>
      {
        courseCategory.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
      }
    </div>
  );
};

export default Courses;