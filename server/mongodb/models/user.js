const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.Schema new Schema could be replaced
const userSchema = new Schema({
  email: {
    type: String,
    reuired: true,
  },
  username: {
    type: String,
    reuired: true,
  },
  password: {
    type: String,
    reuired: true,
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "user"], // only this variables could work
      message: "(VALUE) is not supported",
    },
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
