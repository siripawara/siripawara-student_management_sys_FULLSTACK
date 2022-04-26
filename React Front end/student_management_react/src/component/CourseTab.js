import React from "react";
import { AddCourse } from "./AddCourse";
import { CourseSearch } from "./CourseSearch";

export const CourseTab = () => {
  return (
    <div className="flex flex-col justify-center items-center h-max ">
      <AddCourse />
      <CourseSearch />
    </div>
  );
};
