const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const password = process.env.PASSWORD;

mongoose.connect(
    `mongodb+srv://admin-jon:${password}@cluster0.cuozro0.mongodb.net/userDB`,
    { useNewUrlParser: true }
);
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

module.exports = { User };
