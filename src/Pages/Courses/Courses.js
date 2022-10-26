import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const coursesCategory = useLoaderData();
  return (
    <div className="grid grid-cols-5 container mx-auto">
      <div className="col-span-1">
        {coursesCategory.map((course) => (
          <p className="underline m-2 mb-3" key={course.id}>
            <Link to={`/courses/${course.courseId}`}>{course.courseName}</Link>
          </p>
        ))}
      </div>
      <div className="col-span-4">
        {coursesCategory.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
