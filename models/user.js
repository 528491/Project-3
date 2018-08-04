const mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // username: {type:String, required:true, index:{unique:true}},
    // email: {type:String, required:true, index:{unique:true}},
    // password: {type:String, required:true}

    email: {type: String, required: true},
    password: {type: String, required: true}
});

// const User = mongoose.model("User", userSchema);

// module.exports = User;

// module.exports = userSchema;

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model("User", userSchema);
