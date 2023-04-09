const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://nikhil:nikhil@cluster0.y2zlio8.mongodb.net/databases?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
