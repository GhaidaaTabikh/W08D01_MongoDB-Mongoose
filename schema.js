const mongoose = require("mongoose");
const { stringify } = require("querystring");

//que3

const userSchema = new mongoose.Schema({
  task: { type: String, require: true },
  description: { type: String },
  deadline: { type: Date },
  isCompleted: { type: Boolean },
  priority: { type: Boolean },
});

//que4
module.exports = mongoose.model("todo", userSchema);
