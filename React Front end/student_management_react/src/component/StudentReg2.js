import React, { useState, useEffect } from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Studentreg = () => {


  useEffect(() => {
    fetchCourse();
  }, []);

  const [course, setCourse] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [allCourses, setAllCourses] = useState([]);

  const toast = useToast();
  const handleRegisterButton = async () => {
    console.log(firstName, lastName, email);
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      email.includes("@")
    ) {
      let ids = getCourseids();
      let idJosn = [];

      ids.map((id) => idJosn.push({ courseId: id }));
      //   console.log(idJosn);
      let data = {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        email: `${email}`,
        courses: idJosn,
      };

      let fetachStatus = await fetchNewStudent(data);
      if (fetachStatus) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setCourse([]);
        return toast({
          title: "Student Registered",
          description: "Studnet has been registered succufully",
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
        description: "Please insert all details about student",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const fetchCourse = async () => {
    await axios.get("http://localhost:8080/api/v1/allCourses").then(
      (res) => {
        setAllCourses(res.data);
      },
      (error) => console.log("error")
    );
  };

  const fetchNewStudent = async (data) => {
    let status = false;
    await axios
      .post("http://localhost:8080/api/v1/addStudentWithCourse", data)
      .then(
        (res) => {
          console.log("ok");
          status = true;
        },
        (error) => {
          console.log("error");
          status = false;
        }
      );
    return status;
  };

  const getCourseids = () => {
    let ids = [];
    course.map((selectedCourse) => {
      //   console.log(selectedCourse);
      allCourses.map((item) => {
        if (selectedCourse === item.courseName) {
          ids.push(item.courseId);
        }
        return null;
      });
      return null;
    });
    return ids;
  };

  const handleChange = (e) => {
    if (!course.includes(e.target.value) && e.target.value !== "select")
      setCourse([...course, e.target.value]);
  };

  const removeCourse = (item) => {
    setCourse(course.filter((e) => e !== item));
    console.log(item);
  };

  return (
    <div className=" w-9/12 pt-10 pb-10 rounded-lg bg-gray-200 m-3 ">
      <div className="h-auto border-black border-0 pt-3 transition-all duration-700">
        <div className=" flex justify-center">
          <h1 className=" text-xl  justify-center mb-4 bg-gray-700 pl-6 pr-6 pb-2 pt-1.5 rounded-lg text-gray-200">
            Register Student
          </h1>
        </div>
        <div className="px-32">
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-fit">First Name</h1>
            <input
              className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"
              onInput={(e) => setFirstName(e.target.value)}
              value={firstName}
            ></input>
          </div>
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-fit">Last Name</h1>
            <input
              className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"
              onInput={(e) => setLastName(e.target.value)}
              value={lastName}
            ></input>
          </div>
          <div className="flex flex-row align-baseline justify-center">
            <h1 className="w-fit mr-5">E - mail</h1>
            <input
              className="bg-transparent border-2 border-gray-300 rounded-lg w-60 mb-4 mx-4 hover:border-gray-400 px-2"
              onInput={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="flex flex-row align-top justify-center mb-2">
            <h1 className="w-fit mr-5">Courses</h1>
            {course ? (
              course.map((item) => (
                <Tag
                  size="lg"
                  key="lg"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                  margin="1"
                >
                  <TagLabel>{`${item}`}</TagLabel>
                  <TagCloseButton onClick={() => removeCourse(item)} />
                </Tag>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col align-top justify-center ">
            <div className="flex flex-col align-top justify-center ">
              <select
                onChange={handleChange}
                className="bg-transparent border-2 border-gray-300 rounded-lg hover:border-gray-400 p-1 w-32 m-auto mb-1"
              >
                <option>select</option>
                {allCourses ? (
                  allCourses.map((item) => {
                    return <option>{`${item.courseName}`}</option>;
                  })
                ) : (
                  <></>
                )}
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <button
              className="m-auto h-8 mt-3 mb-3 border-2 rounded-lg hover:bg-gray-600 transition-all duration-700 border-gray-400 w-32"
              onClick={handleRegisterButton}
            >
              <span className="hover:text-gray-200 transition-all duration-700">
                Register
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentreg;
