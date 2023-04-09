const express = require("express");
const userSignup = require("../controllers/userControllers/userSignup");
const getUserById = require("../controllers/userControllers/getUserById");
const updateUserById = require("../controllers/userControllers/updateUserById");
const deleteUserById = require("../controllers/userControllers/deleteUserById");

const app = express.Router();

app.post("/", userSignup);

app.post("/:id", getUserById);

app.put("/:id", updateUserById);

app.delete("/:id", deleteUserById);

module.exports = app;
