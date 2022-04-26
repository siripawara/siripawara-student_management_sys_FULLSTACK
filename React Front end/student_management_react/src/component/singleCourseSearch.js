import React from 'react'

const singleCourseSearch = (props) => {
  return (
    <div className="px-32  w-full mb-3 pl-0 ml-3 mr-3 flex flex-row justify-around items-baseline">
    <h1 className="font-light w-52">{props.courseName}</h1>
    <h1 className="font-light w-52">{props.credit}</h1>
   </div>
  )
}

export default singleCourseSearch