import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import EditModal from "./Modal";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

const UserList = () => {
  const [data, setData] = useState([]);
  const toast = useToast();

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://expensive-crow-baseball-cap.cyclic.app/analytics/users"
      );
      console.log(res.data.allUsers);
      setData(res.data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (id, form) => {
    try {
      let res = await axios.put(
        `https://expensive-crow-baseball-cap.cyclic.app/users/${id}`,
        form
      );
      toast({
        title: "",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      getData();
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

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://expensive-crow-baseball-cap.cyclic.app/users/${id}`
      );
      toast({
        title: "",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      getData();
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
    <TableContainer
      w={{ lg: "80%", md: "80%", sm: "100%", base: "100%" }}
      m="auto"
    >
      <Table variant="simple">
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
            <Th>Edit</Th>
            <Th>Delete</Th>
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
                  {el.name}
                </Td>
                <Td>{el.email}</Td>
                <Td>
                  <EditModal el={el} handleSubmit={handleSubmit} />
                </Td>
                <Td>
                  <AiFillDelete
                    color="red"
                    fontSize={"22px"}
                    onClick={() => handleDelete(el._id)}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
