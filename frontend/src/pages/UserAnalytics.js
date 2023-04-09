import {
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const UserAnalytics = () => {
  const [data, setData] = useState([]);
  const totalUsers = useRef(null);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://expensive-crow-baseball-cap.cyclic.app/analytics/users/top-active"
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalUsers = async () => {
    let res = await axios.get(
      "https://expensive-crow-baseball-cap.cyclic.app/analytics/users"
    );
    totalUsers.current = res.data.length;
  };

  useEffect(() => {
    getTotalUsers();
    getData();
  }, []);

  return (
    <>
      <Heading textAlign={"center"} mb="20px">
        User analytics
      </Heading>
      <Flex
        py={5}
        w="90%"
        m="auto"
        justify={"center"}
        boxShadow={"md"}
        borderRadius={"10px"}
      >
        <Text fontSize={"25px"}>Total Users:- {totalUsers.current}</Text>
      </Flex>
      <Heading textAlign={"center"} my={5}>
        Top 5 active users
      </Heading>
      <TableContainer
        w={{ lg: "80%", md: "80%", sm: "100%", base: "100%" }}
        m="auto"
        mt="20px"
      >
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th
                display={{
                  lg: "inherit",
                  md: "inherit",
                  sm: "none",
                  base: "none",
                }}
              >
                Name
              </Th>
              <Th>Email</Th>
              <Th>No of posts</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td
                    display={{
                      lg: "inherit",
                      md: "inherit",
                      sm: "none",
                      base: "none",
                    }}
                  >
                    {el.user.name}
                  </Td>
                  <Td>{el.user.email}</Td>
                  <Td>{el.noOfPosts}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserAnalytics;
