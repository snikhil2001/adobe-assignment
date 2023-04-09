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
  name: "",
  email: "",
  bio: "",
};

const UserForm = () => {
  const [form, setForm] = useState(initialState);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (form.name === "" || form.name.length > 50 || form.email === "") {
      toast({
        title: "",
        description:
          "Please fill out all required details or name should be less than 50 characters",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      let res = await axios.post(
        "https://expensive-crow-baseball-cap.cyclic.app/users/",
        form
      );
      localStorage.setItem("userId", res.data.userId);
      toast({
        title: "",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
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
      <Heading>Create User</Heading>
      <FormControl
        w={{ lg: "30%", md: "70%", sm: "80%", base: "80%" }}
        m="auto"
      >
        <FormLabel>Name</FormLabel>
        <Input
          minLength={1}
          maxLength={50}
          mb="20px"
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <FormLabel>Email address</FormLabel>
        <Input
          required={true}
          mb="20px"
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <FormLabel>Bio</FormLabel>
        <Textarea
          minLength={1}
          maxLength={50}
          mb="20px"
          name="bio"
          id="name"
          value={form.bio}
          onChange={handleChange}
        />
        <Input
          type="submit"
          w="50%"
          background={"teal"}
          color="white"
          fontSize={20}
          onClick={handleSubmit}
        />
      </FormControl>
    </Box>
  );
};

export default UserForm;
