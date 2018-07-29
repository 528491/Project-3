const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;