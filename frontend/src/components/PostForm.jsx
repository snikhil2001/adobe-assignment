import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  useToast,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const initialState = {
  content: "",
};

const PostForm = () => {
  const userId = localStorage.getItem("userId") || null;
  const [form, setForm] = useState(initialState);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.content === "" || form.content.length > 500) {
      toast({
        title: "",
        description:
          "Please fill out all required details or content should be less than 500 characters",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      let res = await axios.post(
        "https://expensive-crow-baseball-cap.cyclic.app/posts/",
        { content: form.content, userId }
      );
      toast({
        title: "",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="100%" mt="50px" textAlign={"center"}>
      <Heading>Create Post</Heading>
      <FormControl
        w={{ lg: "30%", md: "70%", sm: "80%", base: "80%" }}
        m="auto"
      >
        <FormLabel>Content</FormLabel>
        <Textarea
          minLength={1}
          maxLength={50}
          mb="20px"
          name="content"
          id="name"
          value={form.content}
          onChange={handleChange}
        />
        <Input
          type="submit"
          w="50%"
          background={"green"}
          color="white"
          fontSize={20}
          onClick={handleSubmit}
        />
      </FormControl>
    </Box>
  );
};

export default PostForm;
