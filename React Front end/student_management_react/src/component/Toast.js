import { useToast } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();
  return toast({
    title: "Course added",
    description: "Course added succufully",
    status: "success",
    duration: 4000,
    isClosable: true,
  });
};

export default Toast;
