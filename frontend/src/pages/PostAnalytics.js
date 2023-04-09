import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const PostAnalytics = () => {
  const totalPosts = useRef(null);
  const [data, setData] = useState([]);

  const getTotalPosts = async () => {
    let res = await axios.get(
      "https://expensive-crow-baseball-cap.cyclic.app/analytics/posts"
    );
    totalPosts.current = res.data.length;
  };

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://expensive-crow-baseball-cap.cyclic.app/analytics/posts/top-liked"
      );
      console.log(res.data.LikedPosts);
      setData(res.data.LikedPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalPosts();
    getData();
  }, []);

  return (
    <>
      <Heading textAlign={"center"} mb="20px">
        Post analytics
      </Heading>
      <Flex
        py={5}
        w="90%"
        m="auto"
        justify={"center"}
        boxShadow={"md"}
        borderRadius={"10px"}
      >
        <Text fontSize={"25px"}>Total Posts:- {totalPosts.current}</Text>
      </Flex>
      <Heading textAlign={"center"} my={5}>
        Top liked posts
      </Heading>
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
                {el.userId.name[0]}
              </Text>
              <Text fontSize={"18px"} pt="10px" fontWeight={"bold"}>
                {el.userId.name}
              </Text>
              <Text fontSize={"18px"} pt="10px" fontWeight={"bold"}>
                {el.content}
              </Text>
              <Text fontStyle={"italic"}>Likes:- {el.likes}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default PostAnalytics;
