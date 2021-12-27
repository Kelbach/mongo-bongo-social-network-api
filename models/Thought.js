//imports
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    //thoughtText
    {

    },
    //createdAt
    {

    },
    //username(that created this thought)
    {

    },
    //reactions [reactionSchema]
    {
    //reactionId
    //reactionBody
    //username
    //createdAt
    }
)

//virtual for reactionCount
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.reduce((total, reaction) => total + reaction.replies.length + 1, 0);
});

//exports
const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
