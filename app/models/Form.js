const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  htmlContent: String,
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
