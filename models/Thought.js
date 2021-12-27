//imports
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        //reactionBody
        reactionBody: {
            type: String,
            required: true,
            match: [/^([a-zA-Z0-9 _\.-]{1,280})$/, 'Please use between 1 and 280 characters']
        },
        //username
        username: {
            type: String,
            required: true
        },
        //createdAt
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const ThoughtSchema = new Schema(
    {
        //thoughtText
        thoughtText: {
            type: String,
            required: true,
            match: [/^([a-zA-Z0-9 _\.-]{1,280})$/, 'Please use between 1 - 280 characters']
        },
        //createdAt
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        //username(that created this thought)
        username: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        //reactions [reactionSchema]
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

//virtual for reactionCount
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//exports
const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
