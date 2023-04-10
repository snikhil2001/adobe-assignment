import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike, AiFillDelete } from "react-icons/ai";
import PostEditModal from "./PostEditModal";

const PostList = () => {
  const [data, setData] = useState([]);
  const toast = useToast();

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://expensive-crow-baseball-cap.cyclic.app/analytics/posts"
      );
      console.log(res.data.allPosts);
      setData(res.data.allPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (id, form) => {
    try {
      let res = await axios.put(
        `https://expensive-crow-baseball-cap.cyclic.app/posts/${id}`,
        { content: form.content }
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
        `https://expensive-crow-baseball-cap.cyclic.app/posts/${id}`
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

  const handleLike = async (id) => {
    try {
      let res = await axios.post(
        `https://expensive-crow-baseball-cap.cyclic.app/posts/${id}/like`
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

  const handleDislike = async (id) => {
    try {
      let res = await axios.post(
        `https://expensive-crow-baseball-cap.cyclic.app/posts/${id}/unlike`
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box w="100%">
      <Heading textAlign={"center"}>Post List</Heading>
      <SimpleGrid
        w="90%"
        columns={{ lg: 3, md: 2, sm: 1, base: 1 }}
        gap={5}
        m="auto"
        mt="10px"
      >
        {data?.map((el) => {
          return (
            <Box
              border={"1px solid"}
              borderRadius={"20px"}
              textAlign={"center"}
              p={5}
            >
              <Text
                background={`#${Math.floor(Math.random() * 16777215).toString(
                  16
                )}`}
                color="white"
                border={"1px solid"}
                borderRadius={"50px"}
                p={4}
                w="13%"
                margin="auto"
              >
                {el.userId?.name[0]}
              </Text>
              <Text fontSize={"18px"} pt="10px" fontWeight={"bold"}>
                {el.userId?.name}
              </Text>
              <Text fontSize={"18px"} pt="10px" fontWeight={"bold"}>
                {el.content}
              </Text>
              <Text fontStyle={"italic"}>Likes:- {el.likes}</Text>
              <Flex
                w="100%"
                justify={"space-around"}
                mt="20px"
                align={"center"}
              >
                <PostEditModal el={el} handleSubmit={handleSubmit} />
                <AiFillDelete
                  onClick={() => handleDelete(el._id)}
                  color="red"
                  fontSize={"25px"}
                />
                <AiFillLike
                  onClick={() => handleLike(el._id)}
                  fontSize={"25px"}
                />
                <AiFillDislike
                  onClick={() => handleDislike(el._id)}
                  fontSize={"25px"}
                />
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default PostList;
