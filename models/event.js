const mongoose = require("mongoose");
// var bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    // username: {type:String, required:true, index:{unique:true}},
    // email: {type:String, required:true, index:{unique:true}},
    // password: {type:String, required:true}

    // email: {type: String, required: true},
    // password: {type: String, required: true}

    // startDate
    // date: {type: String}

    year: {type: Number},
    month: {type: String},
    day: {type: Number},
    guardianName: {type: String, required: true},
    userEvent: {type: String, required: true}
});

// const User = mongoose.model("User", userSchema);

// module.exports = User;

// module.exports = userSchema;

// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// module.exports = mongoose.model("User", userSchema);

module.exports = mongoose.model("Event", eventSchema);
