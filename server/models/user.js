const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});
module.exports = mongoose.model("User", userScheme);