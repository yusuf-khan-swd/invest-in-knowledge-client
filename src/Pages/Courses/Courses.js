import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/Course/CourseCard";

const Courses = () => {
  const coursesCategory = useLoaderData();
  return (
    <div>
      <div>
        {coursesCategory.map((course) => (
          <button key={course.id}>
            <Link to={`/courses/${course.courseId}`}>{course.courseName}</Link>
          </button>
        ))}
      </div>
      <div>
        {coursesCategory.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
