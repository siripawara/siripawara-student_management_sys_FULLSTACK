import React, { useState, useEffect } from "react";
import SingleSearchResult from "./SingleSearchResult";
import axios from "axios";
import { RepeatIcon } from '@chakra-ui/icons'
const StudentSearch = () => {
  const [allStudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    await axios.get("http://localhost:8080/api/v1/allStudents").then(
      (res) => {
        console.log(res.data);
        setAllStudent(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleSearchBottom = () => {
    console.log(search);
  };
  return (
    <div className="border-gray-500  w-9/12 pt-10 pb-10 rounded-lg bg-gray-200">
      <div className=" h-96 flex flex-col ">
        <div className="flex justify-center">
          <span className="border-0 border-black text-xl justify-center mb-4 h-10 m-auto mt-3 bg-gray-700 text-gray-200 pt-1 pl-6 pr-6 rounded-lg">
            Search Student
          </span>
        </div>
        <button className="float-left w-11 pl-3 " onClick={()=> window.location.reload(false)}><RepeatIcon w={6} h={6} color="green"/> </button>
        <div className="flex justify-center items-baseline">
          <input
            className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"
            placeholder="Search By name"
            onInput={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="h-8 border-2 rounded-lg transition-all duration-1000 hover:bg-gray-700 border-gray-400 pl-2 pr-2"
            onClick={handleSearchBottom}
          >
            <span className="hover:text-gray-200 transition-all duration-700">
              Search
            </span>
          </button>
        </div>

        <div className="border-2 border-gray-400 rounded-3xl h-1 bg-gray-400 m-4 mt-0"></div>
        <div className=" overflow-y-auto overflow-x-hidden">
          <div className="px-32  w-full mb-3 pl-0 ml-3 mr-3 flex flex-row justify-around items-baseline">
            <h1 className="font-semibold w-52">First Name</h1>
            <h1 className="font-semibold w-52">Last Name</h1>
            <h1 className="font-semibold w-64">Email</h1>
            <h1 className="font-semibold w-52">Courses</h1>
          </div>
          {allStudent ? (
            allStudent.map((item) => {
              if (search === "") {
                console.log("sas");
                return (
                  <SingleSearchResult
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    courses={item.courses}
                  />
                );
              } else {
                if (
                  item.firstName.toLowerCase().includes(search.trim().toLowerCase()) ||
                  item.lastName.toLowerCase().includes(search.trim().toLowerCase())
                ) {
                  return (
                    <SingleSearchResult
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      courses={item.courses}
                    />
                  );
                }
              }
              return null;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentSearch;
