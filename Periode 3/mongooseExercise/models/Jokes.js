'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let JokeSchema = new Schema({
    joke: {type: String, required: true, minlength: 5},
    category: [String],
    reference: {author: String, link: String},
    lastEdited: {type: Date, default: Date.now}    
});

JokeSchema.pre('save', function(next){
    let currentDate = new Date();

    this.lastEdited = currentDate;

    if(!this.lastEdited)
        this.lastEdited = currentDate;

    next();
});

let JokeModel= mongoose.model("Joke", JokeSchema);
module.exports = JokeModel;


