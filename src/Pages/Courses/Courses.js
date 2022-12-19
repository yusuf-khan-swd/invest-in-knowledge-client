import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";

const Courses = () => {
  const coursesCategory = useLoaderData();
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`${darkTheme ? 'bg-gray-600' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 pt-8 pb-20 ">
          <div className="col-span-1 mx-2">
            <div className="sticky top-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 mb-4">
              {coursesCategory.map((course) => (
                <p title={course.courseName} className={`rounded-lg py-1 px-2 font-semibold ${darkTheme ? 'text-gray-100 bg-gray-500' : 'text-blue-900 bg-gray-200'}`} key={course.id}>
                  <Link className="hover:underline " to={`/courses/${course.courseId}`}>{course.courseName}</Link>
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
