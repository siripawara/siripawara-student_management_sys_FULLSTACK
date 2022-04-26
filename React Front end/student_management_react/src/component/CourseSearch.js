import React, { useEffect, useState } from "react";
import SingleCourseSearch from "./singleCourseSearch";
import axios from "axios";
import { RepeatIcon } from '@chakra-ui/icons'
export const CourseSearch = () => {
  useEffect(() => {
    fetchAllCourses()
  }, [] );
  
  const [allCourses, setAllCourses] = useState([]);

  const fetchAllCourses = async () => {
    axios.get("http://localhost:8080/api/v1/allCourses").then(
      (res) => {
        console.log(res.data)
        setAllCourses(res.data)
      },
      (error) => {
        console.log(error)
      }
    );
  };


  return (
    <div className=" w-1/2 p-3 pt-10 pb-10 rounded-lg bg-gray-200 mr-2 flex  flex-col h-96 ">
      <span className="border-1 border-black text-xl justify-center mb-2 w-44 ml-auto mr-auto   bg-gray-700 pl-6 pr-6 pb-2 pt-1.5 rounded-lg text-gray-200 ">
        Search Course
      </span>
      <button className="float-left mb-2 w-11 pl-3 " onClick={()=> window.location.reload(false)}><RepeatIcon w={6} h={6} color="green"/> </button>
      <div className="border-2 border-gray-400 rounded-3xl h-1 bg-gray-400 m-4 mt-0"></div>{" "}
      <div className=" overflow-y-auto overflow-x-hidden">
        <div className="px-32  w-full mb-3 pl-0 ml-3 mr-3 flex flex-row justify-around items-baseline">
          <h1 className="font-semibold w-52">Course Name</h1>
          <h1 className="font-semibold w-52">Credit</h1>
        </div>
        {
          allCourses ? (
            allCourses.map((item)=> {
              return <SingleCourseSearch courseName={item.courseName} credit={item.credit}/>
              
            })
          ):(<></>)
        }
       
      </div>
    </div>
  );
};
