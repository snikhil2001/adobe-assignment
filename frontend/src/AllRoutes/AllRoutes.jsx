import React from "react";
import CreateUser from "../pages/CreateUser";
import { Routes, Route } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import UserAnalytics from "../pages/UserAnalytics";
import PostAnalytics from "../pages/PostAnalytics";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/createuser" element={<CreateUser />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/user-analytics" element={<UserAnalytics />} />
      <Route path="/post-analytics" element={<PostAnalytics />} />
    </Routes>
  );
};

export default AllRoutes;
