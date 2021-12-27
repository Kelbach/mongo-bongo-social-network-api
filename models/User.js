//imports
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    //username
    {
        
    },
    //email
    {

    },
    //thoughts [model array]
    {

    },
    //friends
    {

    }  
)

//virtual for friendCount
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.replies.length + 1, 0);
});

//exports
const User = model('User', UserSchema);
module.exports = User;