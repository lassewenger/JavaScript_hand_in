const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
});

//  the User class       collecction  Schema som colletion skal følge
const User = mongoose.model('user', UserSchema);
module.exports = User;