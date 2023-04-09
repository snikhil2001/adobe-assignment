const express = require("express");
const createPost = require("../controllers/postControllers/createPost");
const getPostById = require("../controllers/postControllers/getPostById");
const updatePostById = require("../controllers/postControllers/updatePostById");
const deletePostById = require("../controllers/postControllers/deletePostById");
const likePost = require("../controllers/postControllers/likePost");
const unlikePost = require("../controllers/postControllers/unlikePost");

const app = express.Router();

app.post("/", createPost);

app.get("/:id", getPostById);

app.put("/:id", updatePostById);

app.delete("/:id", deletePostById);

app.post("/:id/like", likePost);

app.post("/:id/unlike", unlikePost);

module.exports = app;
