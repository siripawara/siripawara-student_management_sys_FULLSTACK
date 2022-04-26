import React from "react";
import { Tag, TagLabel } from "@chakra-ui/react";
const SingleSearchResult = (props) => {
  return (
    <div className="px-32 b w-full border-b-2 border-gray-300 pl-0 ml-3 mr-3 flex flex-row justify-around items-baseline">
      <h1 className="font-thin w-52">{props.firstName}</h1>
      <h1 className="font-thin w-52">{props.lastName}</h1>
      <h1 className="font-thin w-64">{props.email}</h1>
      <h1 className="font-thin w-52">
        {props.courses.map((item) => (
          <Tag
            size="lg"
            key="lg"
            borderRadius="full"
            variant="solid"
            colorScheme="green"
            margin="1"
          >
            <TagLabel>{`${item.courseName}`}</TagLabel>
          </Tag>
        ))}
      </h1>
    </div>
  );
};

export default SingleSearchResult;
