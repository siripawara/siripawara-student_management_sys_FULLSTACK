import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [credit, setCredit] = useState("");

  const toast = useToast();
  const handleAddButton = async () => {
    if (courseName !== "" && credit !== "") {
      let dataJson = {
        courseName: `${courseName}`,
        credit: `${credit}`,
      };
      let status = await fetachAddCourse(dataJson);
      if (status) {
        setCourseName("");
        setCredit("");
        return toast({
          title: "Course added",
          description: "Course added succufully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } else {
        return toast({
          title: "Error",
          description: "Somethong went Wrong. Please try later",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      console.log("no");
      return toast({
        title: "Details are incompleted",
        description: "Please insert all details about course",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const fetachAddCourse = async (data) => {
    let status = false;
    await axios.post("http://localhost:8080/api/v1/addCourse", data).then(
      (res) => {
        console.log("succuss");
        status = true;
      },
      (error) => {
        console.log("error");
        status = false;
      }
    );
    return status;
  };

  return (
    <div className=" w-1/2 h-min p-3 pt-10 pb-10 mb-4 rounded-lg bg-gray-200 mr-2  flex justify-center flex-col ">
      <span className="border-1 border-black text-xl justify-center mb-5 m-auto bg-gray-700 pl-6 pr-6 pb-2 pt-1.5 rounded-lg text-gray-200">
        Add Course
      </span>

      <div>
        <div className="m-auto">
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-28">Course Name</h1>
            <input
              className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"
              onInput={(e) => setCourseName(e.target.value)}
              value={courseName}
            ></input>
          </div>
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-28">Credit</h1>
            <input
              className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"
              onInput={(e) => setCredit(e.target.value)}
              value={credit}
            ></input>
          </div>

          <div className="flex flex-col align-top justify-center "></div>
          <div className="flex flex-col justify-center ">
            <button className="m-auto mt-3 h-8 mb-3 border-2 rounded-lg hover:bg-gray-700 transition-all duration-700 border-gray-400 w-32 ">
              <span
                className="hover:text-gray-200 transition-all duration-700"
                onClick={handleAddButton}
              >
                Add
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
