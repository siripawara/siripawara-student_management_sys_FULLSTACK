import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

const Studentreg = () => {
  const [courseCount, setcourseCount] = useState([{ course: 1 }]);
  const [coursenum, setCoursenum] = useState(1);

  const [course1, setCourse1] = useState([]);

  const test = () => {
    console.log(coursenum);
    console.log(courseCount);
    console.log(course1);
  };

  const SelectCourse = (props) => {
    const handleChange = (e) => {
      setCourse1([...course1, e.target.value]);
    };
    return (
      <select
        onChange={handleChange}
        className="bg-transparent border-2 border-gray-300 rounded-lg hover:border-gray-400 p-1 w-32 m-auto mb-1"
      >
        <option value={`not`}>select</option>
        <option value={`dsa`}>DSA</option>
        <option value={`dba`}>DBA</option>
        <option value={`java`}>Java</option>
      </select>
    );
  };

  const renderButton = () => {
    if (courseCount.length < 5) {
      setCoursenum(coursenum + 1);
      setcourseCount([...courseCount, { course: coursenum + 1 }]);
    }
  };

  return (
    <div className=" w-1/2 rounded-lg bg-gray-200 ">
      <div className="h-auto border-black border-0 pt-3 transition-all duration-700">
        <div className=" flex justify-center">
          <h1 className="border-1 border-black text-xl justify-center mb-2">
            Register Student
          </h1>
        </div>
        <div className="px-32">
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-fit">First Name</h1>
            <input className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"></input>
          </div>
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-fit">Last Name</h1>
            <input className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"></input>
          </div>
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-fit mr-5">E - mail</h1>
            <input className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"></input>
          </div>
          <div className="flex flex-row align-top justify-center">
            <h1 className="w-fit mr-5">Courses</h1>
            <AddIcon
              w={6}
              h={6}
              onClick={renderButton}
              className="rounded-xl p-1 transition-all duration-300 hover:bg-gray-400"
            />
          </div>
          <div className="flex flex-col align-top justify-center ">
            {courseCount.map((item) => {
              return <SelectCourse id={item.course} />;
            })}
          </div>
          <div className="flex flex-col justify-center ">
            <button
              className="m-auto mt-3 h-9 mb-3 border-2 rounded-lg hover:bg-gray-300 border-gray-500 w-32"
              onClick={test}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentreg;
