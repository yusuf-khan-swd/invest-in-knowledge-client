import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";

const Courses = () => {
  const coursesCategory = useLoaderData();
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`${darkTheme ? 'bg-gray-400' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 pt-12 pb-20 gap-4">
          <div className="col-span-1 ml-3">
            <div className="sticky top-2">
              {coursesCategory.map((course) => (
                <p title={course.courseName} className={`md:underline mb-3 ${darkTheme ? 'text-gray-100' : 'text-blue-900'}`} key={course.id}>
                  <Link to={`/courses/${course.courseId}`}>{course.courseName}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="col-span-4">
            {coursesCategory.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
