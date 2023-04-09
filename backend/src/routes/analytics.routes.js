const express = require("express");
const getAllUsers = require("../controllers/userControllers/getAllUsers");
const getTopActiveUsers = require("../controllers/userControllers/getTopActiveUsers");
const getAllPosts = require("../controllers/postControllers/getAllPosts");
const topLikedPosts = require("../controllers/postControllers/topLikedPosts");

const app = express.Router();

app.get("/users", getAllUsers);

app.get("/users/top-active", getTopActiveUsers);

app.get("/posts", getAllPosts);

app.get("/posts/top-liked", topLikedPosts);

module.exports = app;
