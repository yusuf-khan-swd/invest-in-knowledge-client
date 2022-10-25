import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/Course/CourseCard';

const Courses = () => {
  const coursesCategory = useLoaderData();
  return (
    <div>
      {
        coursesCategory.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
      }
    </div>
  );
};

export default Courses;