import React from "react";
import StudentReg2 from "./StudentReg2";

import StudentSearch from "./StudentSearch";

export const StudentTab = () => {
  return (
    <div className="flex flex-col h-max justify-center items-center ">
      <StudentReg2 />
      <StudentSearch />
    </div>
  );
};
