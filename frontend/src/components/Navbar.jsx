import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <Box w="100%" m="auto" bg="teal" mb="30px" color="white">
      <Flex
        display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
        p="10px 20px"
        pr="50px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/createpost">Add Post</Link>
        <Link to="/createuser">Add User</Link>
        <Link to="/post-analytics">Post Analytics</Link>
        <Link to="/user-analytics">User Analytics</Link>
      </Flex>

      <Flex
        display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
        p="10px 20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/posts">
          <Flex alignItem s="center" gap="10px">
            <Text fontWeight="700" color="white">
              Social Media
            </Text>
          </Flex>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            bg="teal"
            _hover={{ bg: "teal" }}
            aria-label="Options"
            icon={<RxHamburgerMenu color="white" bg="teal" fontSize="30px" />}
            variant="outline"
          />
          <MenuList mt="16px" bg="teal" color="white">
            <MenuItem bg="teal" color="white">
              <Link to="/posts">Posts</Link>
            </MenuItem>
            <MenuItem bg="teal" color="white">
              <Link to="/users">Users</Link>
            </MenuItem>
            <MenuItem bg="teal" color="white">
              <Link to="/createpost">Add Posts</Link>
            </MenuItem>
            <MenuItem bg="teal" color="white">
              <Link to="/createuser">Create User</Link>
            </MenuItem>
            <MenuItem bg="teal" color="white">
              <Link to="/post-analytics">Post Analytics</Link>
            </MenuItem>
            <MenuItem bg="teal" color="white">
              <Link to="/user-analytics">User Analytics</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default Navbar;
