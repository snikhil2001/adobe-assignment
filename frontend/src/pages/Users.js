import React from "react";
import UserList from "../components/UserList";
import { Heading } from "@chakra-ui/react";

const Users = () => {
  return (
    <>
      <Heading textAlign={"center"} mb="25px">
        User List
      </Heading>
      <UserList />
    </>
  );
};

export default Users;
